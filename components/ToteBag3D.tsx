"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function buildTotebag(): THREE.Group {
  const totebagGroup = new THREE.Group();
  totebagGroup.name = "CARRYA_Upcycled_Denim_Totebag_FullView";

  // CARRYA logo patch texture
  const canvasLogo = document.createElement("canvas");
  canvasLogo.width = 256;
  canvasLogo.height = 128;
  const ctx = canvasLogo.getContext("2d")!;
  ctx.fillStyle = "#E6A100";
  ctx.fillRect(0, 0, 256, 128);
  ctx.fillStyle = "#111d2e";
  ctx.fillRect(8, 8, 240, 112);
  ctx.fillStyle = "#E6A100";
  ctx.font = "bold 44px Syne, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("CARRYA", 128, 64);
  const logoTexture = new THREE.CanvasTexture(canvasLogo);

  // Materials
  const indigoDenimMat = new THREE.MeshStandardMaterial({
    color: 0x182942,
    roughness: 0.85,
    metalness: 0.05,
    side: THREE.FrontSide,
  });
  const tanLiningMat = new THREE.MeshStandardMaterial({
    color: 0x8c5e38,
    roughness: 0.9,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });
  const pocketDenimMat = new THREE.MeshStandardMaterial({
    color: 0x1f3452,
    roughness: 0.8,
    metalness: 0.05,
  });
  const logoPatchMat = new THREE.MeshStandardMaterial({
    map: logoTexture,
    roughness: 0.5,
    metalness: 0.1,
  });
  const metalButtonMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    roughness: 0.25,
    metalness: 0.95,
  });
  const laptopMat = new THREE.MeshStandardMaterial({
    color: 0xc0c6cc,
    roughness: 0.3,
    metalness: 0.85,
  });
  const bookCoverMat = new THREE.MeshStandardMaterial({
    color: 0xd6c29a,
    roughness: 0.8,
    metalness: 0.05,
  });
  const bookPagesMat = new THREE.MeshStandardMaterial({
    color: 0xf4eedb,
    roughness: 0.9,
  });
  const zipperMat = new THREE.MeshStandardMaterial({
    color: 0x4a4a4a,
    roughness: 0.4,
    metalness: 0.8,
  });
  const goldStitchMat = new THREE.LineBasicMaterial({ color: 0xe6a100 });

  // Outer denim shell (tapered)
  const outerGeo = new THREE.BoxGeometry(1.85, 1.8, 0.42, 32, 32, 16);
  const outerPos = outerGeo.attributes.position;
  for (let i = 0; i < outerPos.count; i++) {
    let x = outerPos.getX(i);
    let y = outerPos.getY(i);
    let z = outerPos.getZ(i);
    const yNorm = (y + 0.9) / 1.8;
    if (y > 0.0) {
      const openFactor = Math.pow(y / 0.9, 1.1);
      z *= 1 + openFactor * 0.18;
      x *= 1 + openFactor * 0.03;
    }
    if (y < -0.5) {
      const sag = Math.cos((x / 0.925) * (Math.PI / 2)) * 0.05;
      y -= sag;
      z *= 1 + (1 - yNorm) * 0.1;
    }
    outerPos.setXYZ(i, x, y, z);
  }
  outerGeo.computeVertexNormals();
  const bagOuter = new THREE.Mesh(outerGeo, indigoDenimMat);
  bagOuter.position.y = -0.25;
  bagOuter.castShadow = true;
  bagOuter.receiveShadow = true;
  totebagGroup.add(bagOuter);

  // Back pocket
  const backPocket = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.7, 0.03),
    pocketDenimMat
  );
  backPocket.position.set(0, -0.3, -0.22);
  backPocket.castShadow = true;
  totebagGroup.add(backPocket);

  // Inner tan lining
  const innerGeo = new THREE.BoxGeometry(1.78, 1.74, 0.38, 24, 24, 12);
  const innerPos = innerGeo.attributes.position;
  for (let i = 0; i < innerPos.count; i++) {
    let x = innerPos.getX(i);
    const y = innerPos.getY(i);
    let z = innerPos.getZ(i);
    if (y > 0.0) {
      const openFactor = Math.pow(y / 0.87, 1.1);
      z *= 1 + openFactor * 0.16;
      x *= 1 + openFactor * 0.02;
    }
    innerPos.setXYZ(i, x, y, z);
  }
  innerGeo.computeVertexNormals();
  const bagInner = new THREE.Mesh(innerGeo, tanLiningMat);
  bagInner.position.y = -0.24;
  totebagGroup.add(bagInner);

  // Zipper track
  const zipperTrack = new THREE.Mesh(
    new THREE.TorusGeometry(0.82, 0.018, 8, 32, Math.PI),
    zipperMat
  );
  zipperTrack.rotation.x = Math.PI / 2;
  zipperTrack.position.set(0, 0.62, 0);
  zipperTrack.scale.set(1.0, 0.22, 1.0);
  totebagGroup.add(zipperTrack);

  const innerSnap = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 0.02, 16),
    metalButtonMat
  );
  innerSnap.position.set(0, 0.58, 0.1);
  totebagGroup.add(innerSnap);

  // Laptop inside
  const laptopGroup = new THREE.Group();
  const laptopBody = new THREE.Mesh(
    new THREE.BoxGeometry(1.25, 0.85, 0.045),
    laptopMat
  );
  laptopBody.castShadow = true;
  laptopGroup.add(laptopBody);
  const laptopLogo = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.01, 16),
    metalButtonMat
  );
  laptopLogo.rotation.x = Math.PI / 2;
  laptopLogo.position.set(0, 0.1, 0.024);
  laptopGroup.add(laptopLogo);
  laptopGroup.position.set(0, 0.28, -0.02);
  laptopGroup.rotation.x = -0.02;
  totebagGroup.add(laptopGroup);

  // Notebook inside
  const book = new THREE.Mesh(
    new THREE.BoxGeometry(0.82, 0.62, 0.1),
    bookCoverMat
  );
  book.position.set(-0.05, 0.1, 0.03);
  book.rotation.x = -0.03;
  book.rotation.z = 0.02;
  book.castShadow = true;
  totebagGroup.add(book);
  const bookPages = new THREE.Mesh(
    new THREE.BoxGeometry(0.78, 0.58, 0.08),
    bookPagesMat
  );
  bookPages.position.set(-0.03, 0.1, 0.03);
  bookPages.rotation.x = -0.03;
  bookPages.rotation.z = 0.02;
  totebagGroup.add(bookPages);

  // Front pocket (envelope flap)
  const pWidth = 1.0;
  const pHeight = 0.85;
  const pocketBase = new THREE.Mesh(
    new THREE.BoxGeometry(pWidth, pHeight, 0.035),
    pocketDenimMat
  );
  pocketBase.position.set(0, -0.42, 0.22);
  pocketBase.castShadow = true;
  totebagGroup.add(pocketBase);

  const flapShape = new THREE.Shape();
  flapShape.moveTo(-pWidth / 2 - 0.01, 0.0);
  flapShape.lineTo(pWidth / 2 + 0.01, 0.0);
  flapShape.lineTo(pWidth / 2 + 0.01, -0.16);
  flapShape.lineTo(0.0, -0.38);
  flapShape.lineTo(-pWidth / 2 - 0.01, -0.16);
  flapShape.closePath();
  const pocketFlap = new THREE.Mesh(
    new THREE.ExtrudeGeometry(flapShape, {
      depth: 0.03,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.01,
      bevelThickness: 0.01,
    }),
    pocketDenimMat
  );
  pocketFlap.position.set(0, 0.01, 0.225);
  pocketFlap.castShadow = true;
  totebagGroup.add(pocketFlap);

  const flapStitch = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-pWidth / 2, 0.01, 0.26),
      new THREE.Vector3(-pWidth / 2, -0.15, 0.26),
      new THREE.Vector3(0.0, -0.36, 0.26),
      new THREE.Vector3(pWidth / 2, -0.15, 0.26),
      new THREE.Vector3(pWidth / 2, 0.01, 0.26),
    ]),
    goldStitchMat
  );
  totebagGroup.add(flapStitch);

  // Logo patch
  const patchMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.38, 0.16),
    logoPatchMat
  );
  patchMesh.position.set(0, -0.1, 0.27);
  totebagGroup.add(patchMesh);

  // Metal button snap
  const button = new THREE.Mesh(
    new THREE.CylinderGeometry(0.045, 0.045, 0.025, 24),
    metalButtonMat
  );
  button.rotation.x = Math.PI / 2;
  button.position.set(0, -0.26, 0.265);
  button.castShadow = true;
  totebagGroup.add(button);

  // Double straps
  const createStrap = (xPos: number, isFront: boolean) => {
    const zSign = isFront ? 1 : -1;
    const curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(xPos, 0.62, 0.2 * zSign),
      new THREE.Vector3(xPos * 0.9, 1.75, 0.2 * zSign),
      new THREE.Vector3(-xPos * 0.9, 1.75, 0.2 * zSign),
      new THREE.Vector3(-xPos, 0.62, 0.2 * zSign)
    );
    const strap = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 36, 0.04, 12, false),
      indigoDenimMat
    );
    strap.castShadow = true;
    return strap;
  };
  totebagGroup.add(createStrap(0.46, true));
  totebagGroup.add(createStrap(0.46, false));

  return totebagGroup;
}

function ToteBag() {
  const ref = useRef<THREE.Group>(null);
  const model = useMemo(() => buildTotebag(), []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005;
  });

  return <primitive ref={ref} object={model} />;
}

export default function ToteBag3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.8, 3.8], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight
        position={[2.5, 4, 3.5]}
        intensity={1.3}
        color={0xfff5e6}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 2, -3]} intensity={0.6} color={0x4876a8} />
      <pointLight position={[0, 1.2, 0]} intensity={0.6} color={0xffebd2} distance={4} />

      <ToteBag />

      <ContactShadows
        position={[0, -1.25, 0]}
        opacity={0.18}
        scale={10}
        blur={2.2}
        far={3}
      />

      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        enablePan={false}
        minDistance={1.8}
        maxDistance={6}
        maxPolarAngle={Math.PI / 1.35}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}

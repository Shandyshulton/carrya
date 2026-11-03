import Image from "next/image";
import TeamMemberCard, { type TeamMember } from "@/components/TeamMemberCard";

const team: TeamMember[] = [
  {
    name: "Shandy Shulton Shihab",
    role: "CEO",
    roleFull: "Chief Executive Officer",
    photo: "/team/shandy.jpeg",
    initials: "SS",
    linkedin: "https://www.linkedin.com/in/shandy-shulton-shihab-73a25922a/",
  },
  {
    name: "Agung Ngurah Nayaka Surya",
    role: "CTO",
    roleFull: "Chief Technology Officer",
    photo: "/team/agung.jpeg",
    initials: "AN",
  },
  {
    name: "Dio Obriel Saragih",
    role: "CFO",
    roleFull: "Chief Financial Officer",
    photo: "/team/dio.jpeg",
    initials: "DO",
    linkedin: "https://www.linkedin.com/in/dioobriels/",
  },
  {
    name: "Saleh Muhammad",
    role: "CMO",
    roleFull: "Chief Marketing Officer",
    photo: "/team/saleh.jpeg",
    initials: "SM",
    linkedin: "https://www.linkedin.com/in/saleh-muhammad-9266112b3/",
  },
  {
    name: "Privanza Wisnu Aqilanndra",
    role: "COO",
    roleFull: "Chief Operating Officer",
    photo: "/team/privanza.jpeg",
    initials: "PW",
    linkedin: "https://www.linkedin.com/in/privanza-wisnu/",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-14 sm:py-20 bg-white border-t border-denim-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-amberGold font-bold text-xs sm:text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-denim-950 mt-1 sm:mt-2">
            Orang di Balik CARRYA
          </h2>
          <p className="text-slate-600 mt-2 sm:mt-3 text-xs sm:text-base">
            Tim kecil yang berkomitmen menghadirkan produk denim upcycle yang
            fungsional dan berkelanjutan.
          </p>
        </div>

        {/* Group photo banner */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-denim-100 mb-8 sm:mb-12 group">
          {/* Full photo, nothing cropped or covered */}
          <div className="relative w-full aspect-[1024/650] bg-denim-950">
            <Image
              src="/team/anggota.jpeg"
              alt="Tim CARRYA bersama di BIFEST 2025"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          {/* Caption below the image */}
          <div className="bg-denim-950 p-5 sm:p-7">
            <span className="inline-flex items-center gap-2 bg-amberGold text-denim-950 text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              <i className="fa-solid fa-location-dot"></i> BIFEST 2025
            </span>
            <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-white mt-2 sm:mt-3">
              Tim CARRYA di BIFEST 2025
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Dokumentasi kebersamaan tim saat menjaga booth dan memperkenalkan
              produk CARRYA kepada pengunjung pameran.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export type TeamMember = {
  name: string;
  role: string;
  roleFull: string;
  photo: string;
  initials: string;
  linkedin?: string;
};

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-denim-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 sm:h-72 bg-gradient-to-br from-denim-700 to-denim-950 overflow-hidden">
        {!imgError ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />
            <span className="font-heading text-5xl sm:text-6xl font-extrabold text-amberGold/90">
              {member.initials}
            </span>
          </div>
        )}

        {/* Role badge */}
        <span className="absolute top-3 right-3 bg-amberGold text-denim-950 text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
          {member.role}
        </span>

        {/* Gradient overlay with name */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-denim-950/90 via-denim-950/40 to-transparent p-4 pt-10">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-bold text-white text-base sm:text-lg leading-tight">
                {member.name}
              </h3>
              <p className="text-amberGold text-[11px] sm:text-xs font-medium mt-0.5">
                {member.roleFull}
              </p>
            </div>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn ${member.name}`}
                className="shrink-0 w-9 h-9 rounded-full bg-white/95 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white shadow-md flex items-center justify-center transition-colors"
              >
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  crop: string;
};

type TeamDirectoryProps = {
  members: TeamMember[];
};

const filterItems = [
  { key: "all", label: "All" },
  { key: "leadership", label: "Leadership" },
  { key: "engineering", label: "Engineering" },
  { key: "design", label: "Design" },
  { key: "media", label: "Media" },
];

function roleToGroup(role: string) {
  const lower = role.toLowerCase();

  if (lower.includes("chief") || lower.includes("head") || lower.includes("project manager")) {
    return "leadership";
  }
  if (
    lower.includes("developer") ||
    lower.includes("technology") ||
    lower.includes("business analyst")
  ) {
    return "engineering";
  }
  if (lower.includes("designer")) {
    return "design";
  }
  if (lower.includes("media") || lower.includes("social network")) {
    return "media";
  }

  return "engineering";
}

export default function TeamDirectory({ members }: TeamDirectoryProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMembers = useMemo(() => {
    if (activeFilter === "all") {
      return members;
    }
    return members.filter((member) => roleToGroup(member.role) === activeFilter);
  }, [activeFilter, members]);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {filterItems.map((item) => {
          const active = item.key === activeFilter;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveFilter(item.key)}
              className={
                active
                  ? "btn-primary !px-4 !py-2"
                  : "btn-secondary !px-4 !py-2 hover:border-accent/55"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredMembers.map((member, index) => (
          <Reveal key={member.name} delay={index * 35}>
            <article className="route-card h-full">
              <div className="relative overflow-hidden rounded-xl border border-line/30 bg-bg1/60 aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 46vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: member.crop }}
                />
              </div>
              <h2 className="mt-4 ui-h3">{member.name}</h2>
              <p className="mt-2 text-xs tracking-[0.14em] uppercase text-mist">{member.role}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

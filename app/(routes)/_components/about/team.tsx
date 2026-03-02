"use client";

import Image from "next/image";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";

import { teamMembers } from "@/constants/team";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/section-header";
import BlurFade from "@/components/shared/blur-fade";

const TeamSection = () => {
  return (
    <div className="w-full h-auto max-w-screen-2xl mx-auto responsive-padding flex items-center flex-col mx-auto gap-6 md:gap-8 py-8 md:py-12">
      <SectionHeader
        tag="TEAM"
        title="The Minds Behind the Innovation"
        description="Behind Sap Symphony is a team that never wanted to separate science from wonder."
      />
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {teamMembers.map((member, index) => (
          <BlurFade key={member.id} delay={0.1 * index} inView>
            <Card className="p-3 shadow-none!">
              <CardContent className="p-0 flex flex-col gap-4">
                {/* Image */}
                <div className="relative aspect-5/4 w-full rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex justify-between gap-5">
                  <div className="space-y-1.5">
                    <h3 className="text-light-black font-semibold font-manrope">
                      {member.name}
                    </h3>
                    <p className="text-deep-gray text-sm font-manrope">
                      {member.position}
                    </p>
                  </div>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    <IconBrandLinkedinFilled className="size-8" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

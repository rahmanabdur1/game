import React, { useState } from "react";
import { Alert } from "@/types/global.type";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const alerts: Alert[] = [
  {
    time: "1 hour ago",
    type: "INJURY",
    title: "Rashee Rice (knee) to be full-go for training camp",
    description:
      "Rice is continuing to work his way back from a season-ending knee injury suffered last year. It also remains uncertain as of now if he will be facing a suspension or not.",
    image: "/images/rashee-rice.png",
  },
  {
    time: "2 hours ago",
    type: "INJURY",
    title: "Jonathan Ward released by Steelers",
    description:
      "Ward has played in very limited role across five seasons in the NFL. He'll look to compete for a depth role on another team in training camp.",
    image: "/images/jonathan-ward.png",
  },
  {
    time: "3 hours ago",
    type: "SPECULATION",
    title: "Insider reports suggest Davante Adams could be traded before deadline",
    description:
      "Multiple sources indicate the Raiders are fielding calls about their star receiver as they consider a rebuild.",
    image: "/images/davante-adams.png",
  },
  {
    time: "5 hours ago",
    type: "CONTRACT",
    title: "Amon-Ra St. Brown signs 4-year, $120M extension with Lions",
    description:
      "The star receiver becomes one of the highest-paid players at his position, securing his future in Detroit.",
    image: "/images/amon-ra.png",
  },
  {
    time: "8 hours ago",
    type: "COACH SPEAK",
    title: "Packers coach hints at more work for rookie RB MarShawn Lloyd",
    description:
      "Head coach Matt LaFleur praised Lloyd's development and suggested an expanded role moving forward.",
    image: "/images/marshawn-lloyd.png",
  },
  {
    time: "12 hours ago",
    type: "TRENDING",
    title:
      "Rookie WR Xavier Legette sees snap count increase for second straight week",
    description:
      "The Panthers rookie is emerging as a reliable target and could be a valuable waiver wire pickup.",
    image: "/images/xavier-legette.png",
  },
];

const filterOptions = [
  { label: "All", value: "ALL" },
  { label: "Injuries", value: "INJURY" },
  { label: "Trending", value: "TRENDING" },
  { label: "Contract", value: "CONTRACT" },
  { label: "Coach Speak", value: "COACH SPEAK" },
];

export default function PlayerAlerts() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [filteredAlerts, setFilteredAlerts] = useState(alerts);

  const handleFilterChange = (filterValue: string) => {
    setActiveFilter(filterValue);
    if (filterValue === "ALL") {
      setFilteredAlerts(alerts);
    } else {
      setFilteredAlerts(alerts.filter(alert => alert.type === filterValue));
    }
  };

  const handleViewMore = () => {
    console.log("View more updates clicked");
    // Add your view more logic here
  };

  return (
    <div
      className="p-6 font-chakra-petch max-w-3xl mx-auto mt-6 rounded-[16px]"
      style={{
        boxShadow: "0px 1px 2px 0px #0000000D",
        border: "1px solid #E5E7EB",
        background: "#FFFFFF"
      }}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-green-dark mb-2">Player Alerts</h2>
          <div
            className="w-[150px] h-1 mb-2"
            style={{ background: "var(--accent-yellow)", opacity: 1, borderRadius: 2 }}
          ></div>
        </div>
        <div className="flex gap-3 flex-wrap">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant="default"
              size="sm"
              onClick={() => handleFilterChange(option.value)}
              className={cn(
                "font-semibold transition-all duration-200",
                activeFilter === option.value
                  ? "bg-[var(--green-dark)] text-white hover:bg-[var(--green-dark)]/90"
                  : "bg-[var(--gray-border)] text-foreground hover:bg-[var(--gray-medium)]"
              )}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredAlerts.map((alert, index) => (
          <div key={index} className="bg-card shadow rounded-xl">
            <div className="flex p-4 gap-4 items-start">
              <img
                src={alert.image}
                alt={alert.title}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-[12px] leading-[16px] font-bold font-chakra-petch text-[var(--danger)]">
                  {alert.type}
                  <span className="ml-2 font-normal  font-chakra-petch text-[12px] leading-[16px] text-[var(--gray-span)]">
                    {alert.time}
                  </span>
                </p>
                <p className="text-[18px] leading-[28px] font-semibold text-[var(--deep-dim)] font-chakra-petch">
                  {alert.title}
                </p>
                <p className="font-chakra-petch font-normal text-sm leading-5 text-[var(--deep-dim)]">
                  {alert.description}
                </p>

              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          onClick={handleViewMore}
          variant="default"
          size="lg"
          className="bg-[var(--green-dark)] text-white hover:bg-[var(--green-dark)]/90 font-semibold"
        >
          View More Updates
        </Button>
      </div>
    </div>
  );
}

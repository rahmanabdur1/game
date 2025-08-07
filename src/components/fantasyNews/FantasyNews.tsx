import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Sample news data
const newsData = [
  {
    id: 1,
    image: "/api/placeholder/300/200",
    tag: "BREAKING",
    tagColor: "bg-orange-500",
    title: "Travis Kelce Signs Contract Extension, Becomes Highest-Paid TE",
    author: "Mike Johnson",
    time: "2h ago",
    category: "NFL"
  },
  {
    id: 2,
    image: "/api/placeholder/300/200",
    tag: "WAIVER WIRE",
    tagColor: "bg-blue-500",
    title: "Top 5 Waiver Wire Pickups for Week 3: Hidden Gems to Target",
    author: "Sarah Chen",
    time: "5h ago",
    category: "Waiver"
  },
  {
    id: 3,
    image: "/api/placeholder/300/200",
    tag: "DFS",
    tagColor: "bg-purple-500",
    title: "Week 3 DFS Value Plays: Budget Options with Massive Upside",
    author: "Alex Martinez",
    time: "1d ago",
    category: "DFS"
  },
  {
    id: 4,
    image: "/api/placeholder/300/200",
    tag: "ANALYSIS",
    tagColor: "bg-green-500",
    title: "Justin Jefferson's Record-Breaking Performance: Fantasy Implications",
    author: "Emma Wilson",
    time: "12h ago",
    category: "NFL"
  },
  {
    id: 5,
    image: "/api/placeholder/300/200",
    tag: "INJURY",
    tagColor: "bg-red-500",
    title: "Christian McCaffrey Expected to Miss 2-3 Weeks with Hamstring Strain",
    author: "Jason Roberts",
    time: "8h ago",
    category: "NFL"
  },
  {
    id: 6,
    image: "/api/placeholder/300/200",
    tag: "DYNASTY",
    tagColor: "bg-yellow-500",
    title: "Dynasty Rankings Update: Rookie WR Making Early Impact",
    author: "David Thompson",
    time: "1d ago",
    category: "Dynasty"
  }
];

const filterOptions = [
  { label: "All", value: "ALL" },
  { label: "NFL", value: "NFL" },
  { label: "Dynasty", value: "Dynasty" },
  { label: "DFS", value: "DFS" },
  { label: "Waiver", value: "Waiver" }
];

const FantasyNews = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [filteredNews, setFilteredNews] = useState(newsData);

  const handleFilterChange = (filterValue: string) => {
    setActiveFilter(filterValue);
    if (filterValue === "ALL") {
      setFilteredNews(newsData);
    } else {
      setFilteredNews(newsData.filter(news => news.category === filterValue));
    }
  };

  const handleViewAllNews = () => {
    console.log("View all news clicked");
    // Add your view all news logic here
  };

  return (
    <div className="max-w-[1000px] mx-auto bg-[var(--gray-light)] rounded mt-6 p-6">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-3xl font-bold text-[var(--green-dark)] font-chakra-petch">
            Latest Fantasy News
          </h2>
          <div
            className="w-[300px] h-1 "
            style={{ background: "var(--accent-yellow)", borderRadius: 2 }}
          ></div>
        </div>

        <Button
          onClick={handleViewAllNews}
          className="bg-[var(--green-dark)] text-white hover:bg-[var(--green-dark)]/90 font-semibold px-6 py-2 font-chakra-petch"
        >
          View All News
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            variant="default"
            size="sm"
            onClick={() => handleFilterChange(option.value)}
            className={cn(
              "font-semibold transition-all duration-200 rounded-full px-6 py-2",
              activeFilter === option.value
                ? "bg-[var(--green-dark)] text-white hover:bg-[var(--green-dark)]/90"
                : "bg-[var(--gray-border)] text-[var(--gray-deep)] hover:bg-[var(--gray-medium)]"
            )}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news) => (
          <Card
            key={news.id}
            className="w-full h-[320px] border border-[#E5E7EB] rounded-lg overflow-hidden"
            style={{ boxShadow: "0px 2px 4px 0px #0000001A" }}
          >
            {/* Image Container OUTSIDE CardContent */}
            <div className="h-[290px] w-full ">
              <img
                src={news.image}
                alt="img"
                className="w-full h-full object-cover align-top"
              />
            </div>

            <CardContent className="p-2 h-full">
              <div
                className={cn(
                  "inline-block rounded px-2 py-1 text-white font-chakra-petch",
                  news.tagColor // dynamic bg color from data
                )}
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "100%",
                }}
              >
                {news.tag}
              </div>


              {/* Title */}
              <h3 className="font-chakra-petch font-semibold text-[16px] leading-[28px] text-[var(--deep-slate)] mb-2 mt-1 line-clamp-2">
                {news.title}
              </h3>

              {/* Author */}
              <div className="flex items-center space-x-2 text-[14px] leading-[20px] text-[var(--gray-deep)] font-chakra-petch">
                <img
                  src="/api/placeholder/24/24"
                  alt={news.author}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-normal">
                  {news.author} <span className="mx-1">•</span> {news.time}
                </span>
              </div>
            </CardContent>
          </Card>


        ))}
      </div>

    </div>
  );
};

export default FantasyNews; 
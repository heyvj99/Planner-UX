import React from "react";
import Section from "./Section";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

const MainContent = () => {
  const sections = [
    {
      title: "Introduction",
      duration: "0:45",
      frames: [
        { number: "1", title: "Welcome Message", duration: "0:15" },
        { number: "2", title: "Course Overview", duration: "0:15" },
        { number: "3", title: "What You'll Learn", duration: "0:15" },
      ],
    },
    {
      title: "Getting Started",
      duration: "1:30",
      frames: [
        { number: "4", title: "Setup Environment", duration: "0:30" },
        { number: "5", title: "Basic Concepts", duration: "0:30" },
        { number: "6", title: "First Steps", duration: "0:30" },
      ],
    },
    {
      title: "Core Concepts",
      duration: "2:15",
      frames: [
        { number: "7", title: "Understanding Components", duration: "0:45" },
        { number: "8", title: "State Management", duration: "0:45" },
        { number: "9", title: "Advanced Topics", duration: "0:45" },
      ],
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Course Structure
          </h1>
          <p className="text-gray-500">Plan and organize your course content</p>
        </div>
        <button className="flex items-center gap-2 bg-[#1E2B3A] text-white px-4 py-2 rounded-lg hover:bg-[#2C3E50] transition-colors">
          <AiOutlinePlus size={20} />
          <span>Add Section</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search frames..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <AiOutlineSearch
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            duration={section.duration}
            frames={section.frames}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;

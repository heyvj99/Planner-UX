import React from "react";
import ModuleCard from "./ModuleCard";
import { AiOutlinePlus } from "react-icons/ai";

const MainContent = () => {
  const modules = [
    {
      date: { month: "May", day: "5" },
      title: "Class 1: Intro, Product Sense Mindset",
      subtitle: "Motivation Theory, Cognitive Empathy",
      sections: 5,
      totalTime: "1hr 00min",
      totalMinutes: 60,
      content: [
        {
          title: "Welcome & Orientation",
          duration: 5,
          items: [
            { title: "Kickoff + Icebreaker", duration: 2 },
            { title: "Course Goals & Flow", duration: 2 },
            { title: "What is Product Sense?", duration: 2 },
            { title: "What You'll Create by the End", duration: 2 },
            { title: "Group Norms + Quick Poll", duration: 2 },
          ],
        },
        {
          title: "Thinking Like a Product Thinker",
          duration: 20,
          items: [
            { title: "What Makes a Product Great?", duration: 2 },
            { title: "Spot the Tradeoffs (Activity)", duration: 2 },
            { title: "Case Study: Product Intuition in Action", duration: 2 },
            { title: "Mini-Challenge: Redesign This!", duration: 2 },
          ],
        },
        {
          title: "Walking in Users' Shoes (Cognitive Empathy)",
          duration: 15,
          items: [
            { title: "Empathy vs Sympathy: Quick Quiz", duration: 2 },
            { title: "Understanding Cognitive Empathy", duration: 2 },
            { title: "Persona Immersion Activity", duration: 2 },
            { title: "Bias Check: What Are You Assuming?", duration: 2 },
          ],
        },
        {
          title: "Reflection & Takeaways",
          duration: 10,
          items: [
            { title: "Let's Recap: Key Ideas from Today", duration: 2 },
            { title: "What Shifted for You?", duration: 2 },
            { title: "Top Takeaways from Breakout Groups", duration: 2 },
            { title: "One Insight, One Action (Miro/Jamboard)", duration: 2 },
            { title: "Looking Ahead: What's Next?", duration: 2 },
          ],
        },
      ],
    },
    {
      date: { month: "May", day: "7" },
      title: "Class 2: Simulation, Strategy",
      subtitle: "Foundations, Positioning, Segmentation",
      sections: 3,
      totalTime: "1hr 45min",
      totalMinutes: 75,
      content: [
        {
          title: "Strategy Foundations",
          duration: 25,
          items: [
            { title: "Core Strategy Concepts", duration: 5 },
            { title: "Market Analysis Exercise", duration: 10 },
            { title: "Competitive Positioning", duration: 10 },
          ],
        },
      ],
    },
    {
      date: { month: "May", day: "10" },
      title: "Class 3: Differentiation, Core of Product",
      subtitle: "Strategy",
      sections: 6,
      totalTime: "1hr 30min",
      totalMinutes: 90,
      content: [],
    },
  ];

  return (
    <div className="p-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <span>Course</span>
            <span>›</span>
            <span>Plan</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Improving Your Product Sense
          </h2>
          <div className="text-gray-600 mt-1">3 May - 24 May</div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-purple-600 px-4 py-2 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
            <AiOutlinePlus size={20} />
            <span>Import Agenda</span>
          </button>
          <button className="flex items-center gap-2 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <AiOutlinePlus size={20} />
            <span>Add Module</span>
          </button>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {modules.map((module, index) => (
          <ModuleCard key={index} moduleData={module} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;

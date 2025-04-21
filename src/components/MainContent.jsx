import React, { useState } from "react";
import ModuleCard from "./ModuleCard";
import { AiOutlinePlus } from "react-icons/ai";

const MainContent = () => {
  const [modules, setModules] = useState([
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
  ]);

  const addNewModule = () => {
    // Get the last module's date to calculate next date
    const lastModule = modules[modules.length - 1];
    const lastDate = lastModule
      ? new Date(2024, 4, parseInt(lastModule.date.day))
      : new Date(2024, 4, 1);
    const nextDate = new Date(lastDate);
    nextDate.setDate(nextDate.getDate() + 2); // Add 2 days for next class

    const newModule = {
      date: {
        month: nextDate.toLocaleString("default", { month: "short" }),
        day: nextDate.getDate().toString(),
      },
      title: "New Module",
      subtitle: "Click to edit module details",
      sections: 0,
      totalTime: "0hr 00min",
      totalMinutes: 0,
      completedMinutes: 0,
      isNew: true, // Flag to show it's a new module
      content: [],
    };

    setModules([...modules, newModule]);
  };

  const updateModule = (index, updatedData) => {
    const newModules = [...modules];
    newModules[index] = { ...newModules[index], ...updatedData, isNew: false };
    setModules(newModules);
  };

  const deleteModule = (index) => {
    const newModules = [...modules];
    newModules.splice(index, 1);
    setModules(newModules);
  };

  const toggleModuleVisibility = (index) => {
    const newModules = [...modules];
    newModules[index] = {
      ...newModules[index],
      isHidden: !newModules[index].isHidden,
    };
    setModules(newModules);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <span>Course</span>
            <span>›</span>
            <span>Plan</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Improving Your Product Sense
          </h1>
          <div className="text-gray-600 mt-1">3 May - 24 May</div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-purple-600 px-4 py-2 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
            Import Agenda
          </button>
          <button
            onClick={addNewModule}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <AiOutlinePlus size={20} />
            <span>Add Module</span>
          </button>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            moduleData={module}
            onUpdate={(updatedData) => updateModule(index, updatedData)}
            onDelete={() => deleteModule(index)}
            onToggleVisibility={() => toggleModuleVisibility(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;

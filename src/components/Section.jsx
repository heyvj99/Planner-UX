import React, { useState } from "react";
import { AiOutlineCaretRight, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Section = ({ title, duration, frames }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-3">
      {/* Section Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <AiOutlineCaretRight
            className={`text-gray-400 transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
            size={16}
          />
          <span className="font-medium text-gray-900">{title}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <AiOutlinePlus size={18} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <BsThreeDots size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-4">
          <div className="space-y-3">
            {frames.map((frame, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-600">
                      {frame.number}
                    </span>
                  </div>
                  <span className="text-sm text-gray-700">{frame.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">
                    {frame.duration}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded-md">
                    <BsThreeDots size={16} className="text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;

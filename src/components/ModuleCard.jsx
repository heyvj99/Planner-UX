import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const ModuleCard = ({ moduleData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    date,
    title,
    subtitle,
    sections,
    totalTime,
    totalMinutes,
    completedMinutes = 45,
  } = moduleData;

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden hover:border-gray-300 transition-colors">
      <div className="flex items-center p-4">
        {/* Date Column */}
        <div className="w-16 bg-gray-50 rounded-lg p-2 text-center mr-4">
          <div className="text-gray-500 text-sm">{date.month}</div>
          <div className="text-xl font-semibold text-gray-900">{date.day}</div>
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-[15px] font-medium text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm mt-0.5">{subtitle}</p>
            </div>

            {/* Stats and Actions */}
            <div className="flex items-start gap-6 ml-4">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-sm text-gray-900">
                    {sections} sections
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm font-medium">
                      {completedMinutes}
                    </span>
                    <span className="text-sm text-gray-500">
                      / {totalMinutes} min
                    </span>
                  </div>
                </div>
                {/* Time Progress Bar */}
                <div className="w-24 h-6 bg-gray-100 rounded-md overflow-hidden flex">
                  <div
                    className="h-full bg-pink-200"
                    style={{ width: "20%" }}
                  />
                  <div
                    className="h-full bg-blue-200"
                    style={{ width: "30%" }}
                  />
                  <div className="h-full bg-red-200" style={{ width: "25%" }} />
                  <div
                    className="h-full bg-green-200"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1">
                <button className="p-1.5 hover:bg-gray-100 rounded-md">
                  <AiOutlineEdit className="w-[18px] h-[18px] text-gray-600" />
                </button>
                <button
                  className="p-1.5 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? (
                    <BsChevronUp className="w-[18px] h-[18px] text-gray-600" />
                  ) : (
                    <BsChevronDown className="w-[18px] h-[18px] text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200">
          {moduleData.content.map((section, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-b-0"
            >
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-start gap-3">
                  <span className="text-sm text-gray-500 font-medium">
                    {section.duration} min
                  </span>
                  <h4 className="font-medium text-gray-900">{section.title}</h4>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-4 flex items-center justify-between hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      {/* <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded text-xs text-gray-600">
                        {item.duration}
                      </div> */}
                      <span className="text-sm text-gray-500">
                        {item.duration} min
                      </span>
                      <span className="text-sm text-gray-700">
                        {item.title}
                      </span>
                    </div>
                    {/* <span className="text-sm text-gray-500">
                      {item.duration} min
                    </span> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleCard;

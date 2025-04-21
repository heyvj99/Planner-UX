import React, { useState, useRef, useEffect } from "react";
import {
  AiOutlineEdit,
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BsChevronDown,
  BsChevronUp,
  BsThreeDotsVertical,
} from "react-icons/bs";
import Portal from "./Portal";

const ModuleCard = ({ moduleData, onUpdate, onDelete, onToggleVisibility }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(moduleData.isNew);
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const moreOptionsRef = useRef(null);
  const [editedData, setEditedData] = useState({
    title: moduleData.title || "",
    subtitle: moduleData.subtitle || "",
    date: moduleData.date || { month: "", day: "" },
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        moreOptionsRef.current &&
        !moreOptionsRef.current.contains(event.target)
      ) {
        setShowMoreOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate({
      title: editedData.title,
      subtitle: editedData.subtitle,
      date: editedData.date,
    });
    setIsEditing(false);
    setIsTitleEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSave();
    }
  };

  const handleTitleDoubleClick = () => {
    if (!isEditing) {
      setIsTitleEditing(true);
      setEditedData((prev) => ({
        ...prev,
        title: moduleData.title,
      }));
    }
  };

  const handleTitleBlur = () => {
    if (isTitleEditing) {
      handleSave();
    }
  };

  const handleMoreOptionsClick = () => {
    if (moreOptionsRef.current) {
      const rect = moreOptionsRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.right - 144, // 144px is the width of the dropdown (w-36)
      });
    }
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <div
      className={`border border-gray-200 rounded-lg bg-white overflow-hidden hover:border-gray-300 transition-colors ${
        moduleData.isNew ? "border-dashed" : ""
      } ${moduleData.isHidden ? "opacity-60" : ""}`}
    >
      <div className="flex items-center p-4">
        {/* Date Column */}
        <div
          className={`w-16 ${
            isEditing
              ? "bg-white border-2 border-dashed border-gray-300"
              : "bg-gray-50"
          } rounded-lg p-2 text-center mr-4 cursor-pointer`}
          onClick={() => isEditing && setIsEditing(true)}
        >
          {isEditing ? (
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Month"
                className="w-full text-center text-sm bg-transparent border-none focus:outline-none text-gray-500"
                value={editedData.date.month}
                onChange={(e) =>
                  setEditedData((prev) => ({
                    ...prev,
                    date: { ...prev.date, month: e.target.value },
                  }))
                }
                onKeyPress={handleKeyPress}
              />
              <input
                type="text"
                placeholder="Day"
                className="w-full text-center text-xl bg-transparent border-none focus:outline-none font-semibold text-gray-900"
                value={editedData.date.day}
                onChange={(e) =>
                  setEditedData((prev) => ({
                    ...prev,
                    date: { ...prev.date, day: e.target.value },
                  }))
                }
                onKeyPress={handleKeyPress}
              />
            </div>
          ) : (
            <>
              <div className="text-gray-500 text-sm">
                {moduleData.date.month || "Month"}
              </div>
              <div className="text-xl font-semibold text-gray-900">
                {moduleData.date.day || "Day"}
              </div>
            </>
          )}
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {isEditing || isTitleEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Add module title"
                    className="w-full text-[15px] font-medium bg-transparent border-none focus:outline-none text-gray-900"
                    value={editedData.title}
                    onChange={(e) =>
                      setEditedData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    onKeyPress={handleKeyPress}
                    onBlur={handleTitleBlur}
                    autoFocus={isTitleEditing}
                  />
                  {isEditing && (
                    <textarea
                      placeholder="Add module description"
                      className="w-full text-sm bg-transparent border-none focus:outline-none text-gray-600 resize-none"
                      value={editedData.subtitle}
                      onChange={(e) =>
                        setEditedData((prev) => ({
                          ...prev,
                          subtitle: e.target.value,
                        }))
                      }
                      rows={2}
                    />
                  )}
                </div>
              ) : (
                <>
                  <h3
                    className={`text-[15px] font-medium ${
                      moduleData.isNew ? "text-gray-500" : "text-gray-900"
                    } cursor-text`}
                    onDoubleClick={handleTitleDoubleClick}
                  >
                    {moduleData.title || "Click to add module title"}
                  </h3>
                  <p className="text-gray-600 text-sm mt-0.5">
                    {moduleData.subtitle || "Add module description"}
                  </p>
                </>
              )}
            </div>

            {/* Stats and Actions */}
            <div className="flex items-start gap-6 ml-4">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-sm text-gray-900">
                    {moduleData.sections} sections
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm font-medium">
                      {moduleData.completedMinutes}
                    </span>
                    <span className="text-sm text-gray-500">
                      / {moduleData.totalMinutes} min
                    </span>
                  </div>
                </div>
                {/* Time Progress Bar */}
                <div className="w-24 h-6 bg-gray-100 rounded-md overflow-hidden flex">
                  {!moduleData.isNew && (
                    <>
                      <div
                        className="h-full bg-pink-200"
                        style={{ width: "20%" }}
                      />
                      <div
                        className="h-full bg-blue-200"
                        style={{ width: "30%" }}
                      />
                      <div
                        className="h-full bg-red-200"
                        style={{ width: "25%" }}
                      />
                      <div
                        className="h-full bg-green-200"
                        style={{ width: "25%" }}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1">
                {isEditing ? (
                  <button
                    onClick={handleSave}
                    className="px-3 py-1.5 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded-md"
                      onClick={handleEdit}
                    >
                      <AiOutlineEdit className="w-[18px] h-[18px] text-gray-600" />
                    </button>
                    {!moduleData.isNew && (
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
                    )}
                    <div ref={moreOptionsRef}>
                      <button
                        className="p-1.5 hover:bg-gray-100 rounded-md"
                        onClick={handleMoreOptionsClick}
                      >
                        <BsThreeDotsVertical className="w-[18px] h-[18px] text-gray-600" />
                      </button>
                      {showMoreOptions && (
                        <Portal>
                          <div
                            className="fixed w-36 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-[9999]"
                            style={{
                              top: `${dropdownPosition.top}px`,
                              left: `${dropdownPosition.left}px`,
                            }}
                          >
                            <button
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                              onClick={() => {
                                setShowMoreOptions(false);
                                onToggleVisibility();
                              }}
                            >
                              {moduleData.isHidden ? (
                                <>
                                  <AiOutlineEye className="w-4 h-4" />
                                  Show Module
                                </>
                              ) : (
                                <>
                                  <AiOutlineEyeInvisible className="w-4 h-4" />
                                  Hide Module
                                </>
                              )}
                            </button>
                            <button
                              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"
                              onClick={() => {
                                setShowMoreOptions(false);
                                onDelete();
                              }}
                            >
                              <AiOutlineDelete className="w-4 h-4" />
                              Delete Module
                            </button>
                          </div>
                        </Portal>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && !moduleData.isNew && (
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
                      <span className="text-sm text-gray-500">
                        {item.duration} min
                      </span>
                      <span className="text-sm text-gray-700">
                        {item.title}
                      </span>
                    </div>
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

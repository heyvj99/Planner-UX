import React, { useState, useRef, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import {
  BsChevronDown,
  BsChevronUp,
  BsThreeDotsVertical,
} from "react-icons/bs";
import MoreOptionsDropdown from "./MoreOptionsDropdown";

const ModuleActions = ({
  isEditing,
  isNew,
  isExpanded,
  isHidden,
  onEdit,
  onSave,
  onExpandToggle,
  onHideToggle,
  onDelete,
}) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const moreOptionsRef = useRef(null);

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

  const handleMoreOptionsClick = () => {
    if (moreOptionsRef.current) {
      const rect = moreOptionsRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.right - 144,
      });
    }
    setShowMoreOptions(!showMoreOptions);
  };

  const handleOptionSelect = (callback) => {
    setShowMoreOptions(false);
    callback();
  };

  return (
    <div className="flex items-center gap-1">
      {isEditing ? (
        <button
          onClick={onSave}
          className="px-3 py-1.5 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors"
        >
          Save
        </button>
      ) : (
        <>
          <button
            className="p-1.5 hover:bg-gray-100 rounded-md"
            onClick={onEdit}
          >
            <AiOutlineEdit className="w-[18px] h-[18px] text-gray-600" />
          </button>
          {!isNew && (
            <button
              className="p-1.5 hover:bg-gray-100 rounded-md"
              onClick={onExpandToggle}
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
              <MoreOptionsDropdown
                position={dropdownPosition}
                isHidden={isHidden}
                onHideToggle={() => handleOptionSelect(onHideToggle)}
                onDelete={() => handleOptionSelect(onDelete)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ModuleActions;

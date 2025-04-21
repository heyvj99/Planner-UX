import React from "react";
import {
  AiOutlineDelete,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import Portal from "./Portal";

const MoreOptionsDropdown = ({
  position,
  isHidden,
  onHideToggle,
  onDelete,
}) => {
  return (
    <Portal>
      <div
        className="fixed w-36 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-[9999]"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        <button
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          onClick={onHideToggle}
        >
          {isHidden ? (
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
          onClick={onDelete}
        >
          <AiOutlineDelete className="w-4 h-4" />
          Delete Module
        </button>
      </div>
    </Portal>
  );
};

export default MoreOptionsDropdown;

// app/components/ui/SolutionSelect.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SolutionOption {
  label: string;
  value: string;
}

interface SolutionSelectProps {
  options: SolutionOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
}

export default function SolutionSelect({
  options,
  value,
  onChange,
  placeholder = "Select what you need...",
  label = "What do you need built?",
  error,
  required = false,
}: SolutionSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleToggle = () => {
    if (!isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      // If less than 240px below and more room above, open upwards
      if (spaceBelow < 240 && rect.top > spaceBelow) {
        setOpenUpwards(true);
      } else {
        setOpenUpwards(false);
      }
    }
    setIsOpen((prev) => !prev);
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full" ref={containerRef}>
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
          {label} {required && <span className="text-blue-500">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all duration-200 text-left bg-white/70 dark:bg-gray-900/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
          error
            ? "border-red-500/80 ring-1 ring-red-500/40"
            : isOpen
              ? "border-blue-500 ring-2 ring-blue-500/20"
              : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
        }`}
      >
        <span
          className={`truncate font-medium ${
            selectedOption
              ? "text-gray-900 dark:text-white"
              : "text-gray-400 dark:text-gray-500"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 ml-2 text-gray-400 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-blue-500" : ""
          }`}
        />
      </button>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className={`absolute z-50 left-0 right-0 p-1.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 max-h-60 overflow-y-auto ${
            openUpwards ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <div className="space-y-1">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                    isSelected
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/80"
                  }`}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

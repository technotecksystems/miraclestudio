"use client";

import React, { useState } from "react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  darkTheme?: boolean;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  id,
  error,
  darkTheme = false,
  className = "",
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = " ",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value !== undefined && value !== null && String(value).length > 0;

  return (
    <div className="relative w-full">
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        className={`peer w-full px-4 pt-6 pb-2 text-sm rounded-none border transition-all duration-200 outline-none
          ${
            darkTheme
              ? "bg-stone-900/60 text-stone-100 border-stone-800 focus:border-blue-400 focus:bg-stone-900/90"
              : "bg-white/80 text-stone-900 border-stone-300 focus:border-stone-900 focus:bg-white"
          }
          ${error ? "border-rose-500 focus:border-rose-500" : ""}
          ${className}
        `}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 uppercase tracking-widest text-xs
          ${
            isFocused || hasValue
              ? "top-2 text-[10px] " +
                (darkTheme
                  ? isFocused
                    ? "text-blue-400"
                    : "text-stone-400"
                  : isFocused
                  ? "text-stone-900 font-medium"
                  : "text-stone-500")
              : "top-4 text-xs " + (darkTheme ? "text-stone-500" : "text-stone-400")
          }
        `}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-rose-500 font-light">{error}</p>}
    </div>
  );
};

interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
  darkTheme?: boolean;
}

export const FloatingTextarea: React.FC<FloatingTextareaProps> = ({
  label,
  id,
  error,
  darkTheme = false,
  className = "",
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = " ",
  rows = 4,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value !== undefined && value !== null && String(value).length > 0;

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={onChange}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        className={`peer w-full px-4 pt-7 pb-3 text-sm rounded-none border transition-all duration-200 outline-none resize-none
          ${
            darkTheme
              ? "bg-stone-900/60 text-stone-100 border-stone-800 focus:border-blue-400 focus:bg-stone-900/90"
              : "bg-white/80 text-stone-900 border-stone-300 focus:border-stone-900 focus:bg-white"
          }
          ${error ? "border-rose-500 focus:border-rose-500" : ""}
          ${className}
        `}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 uppercase tracking-widest text-xs
          ${
            isFocused || hasValue
              ? "top-2 text-[10px] " +
                (darkTheme
                  ? isFocused
                    ? "text-blue-400"
                    : "text-stone-400"
                  : isFocused
                  ? "text-stone-900 font-medium"
                  : "text-stone-500")
              : "top-4 text-xs " + (darkTheme ? "text-stone-500" : "text-stone-400")
          }
        `}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-rose-500 font-light">{error}</p>}
    </div>
  );
};

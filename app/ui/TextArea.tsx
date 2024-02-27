"use client";

import { useEffect, useRef } from "react";

export default function TextArea({
  id,
  value,
  name,
  onChange,
  disabled = true,
}: {
  value: string;
  id?: string;
  name?: string;
  onChange?: any;
  disabled?: boolean;
}) {
  const textareaRef = useRef();

  const editHeight = () => {
    const current: HTMLInputElement = textareaRef.current;
    current.style.height = "10px";
    current.style.height = `${current.scrollHeight + 5}px`;
  };
  useEffect(() => {
    editHeight();
  }, []);
  return (
    <textarea
      ref={textareaRef}
      id={id || null}
      name={name || null}
      className="col-span-11 border-2 border-gray-300 rounded-lg shadow-lg w-full py-1 px-3 disabled:cursor-text disabled:px-0 disabled:bg-transparent disabled:border-0 disabled:shadow-none ease-in-out dark:bg-gray-800 dark:border-0"
      value={value}
      rows={4}
      disabled={disabled}
      onChange={(e) => {
        onChange(e.target.value);
        editHeight();
      }}
    />
  );
}

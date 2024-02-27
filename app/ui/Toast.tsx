"use client";
import React, { useRef } from "react";
let toastRef: any;

export default function Toast() {
  toastRef = useRef();
  return (
    <div
      className="fixed top-0 right-0 gap-4 flex flex-col p-5 overflow-hidden"
      ref={toastRef}
    ></div>
  );
}

function CreateToast({
  title,
  toastClass,
  durationInSecound = 4,
}: {
  title: string;
  toastClass: string;
  durationInSecound?: number;
}) {
  const innerToast = `<div class="toast ${toastClass} " style="animation-duration: ${durationInSecound}s !important">${title}</div>`;
  toastRef.current.insertAdjacentHTML("beforeend", innerToast);
  const lastToast = toastRef.current.lastChild;
  lastToast.addEventListener("animationend", () => {
    lastToast.remove();
  });
}
export function SuccessToast({
  title = "",
  durationInSecound,
}: {
  title?: string;
  durationInSecound?: number;
}) {
  CreateToast({
    title: `Success${title === "" ? "" : ", " + title}`,
    toastClass: "success-toast",
    durationInSecound,
  });
}
export function ErrorToast({
  title = "",
  durationInSecound,
}: {
  title: string;
  durationInSecound?: number;
}) {
  CreateToast({
    title: `Error${title === "" ? "" : ", " + title}`,
    toastClass: "error-toast",
    durationInSecound: durationInSecound || 10,
  });
}

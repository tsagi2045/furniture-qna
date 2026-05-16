"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export default function Toast({ message, visible, onHide }: ToastProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setIsFadingOut(false);
      onHide();
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [visible, onHide, message]);

  if (!visible) return null;

  return (
    <div className="fixed top-[var(--space-5)] left-1/2 z-50 -translate-x-1/2">
      <div
        className={isFadingOut ? "animate-toast-out" : "animate-toast-in"}
        style={{
          background: "var(--accent)",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-3) var(--space-5)",
          boxShadow: "var(--shadow-toast)",
          whiteSpace: "nowrap",
        }}
      >
        {message}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500); // Delay for smooth UX
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-blue z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 dark:border-[#64ffda]"></div>
    </div>
  );
}

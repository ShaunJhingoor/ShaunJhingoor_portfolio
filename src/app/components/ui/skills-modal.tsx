"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

type Skill = { name: string; src: string; level?: string };
type SkillCategory = { title: string; skills: Skill[] };

export function SkillsModal({
  open,
  onClose,
  title = "Skills",
  categories = [],
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  categories: SkillCategory[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => open && onClose());

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[99] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-0 z-[100] grid place-items-center px-4"
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <div
              ref={ref}
              className="w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#2B394F] text-white shadow-2xl ring-1 ring-white/10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-[#2B394F]/95 backdrop-blur-md z-10">
                <h3 className="text-lg md:text-xl font-bold">{title}</h3>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-10">
                {categories.map((category) => (
                  <div key={category.title}>
                    <h4 className="text-xl font-semibold mb-4 border-l-4 border-white/30 pl-3">
                      {category.title}
                    </h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition"
                        >
                          <Image
                            src={skill.src}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain"
                          />
                          <span className="text-sm font-medium text-center">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/30 border border-white/10">
                              {skill.level}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

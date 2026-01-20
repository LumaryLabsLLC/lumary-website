"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does Lumary work on Intel Macs?",
    answer:
      "Yes, Lumary supports both Apple Silicon and Intel Macs running macOS 14.0 (Sonoma) or later. However, performance is best on Apple Silicon Macs due to their hardware-accelerated video encoding.",
  },
  {
    question: "Can I record system audio?",
    answer:
      "Yes, Lumary captures system audio through ScreenCaptureKit with no additional software or drivers required. You can record any application audio along with your microphone.",
  },
  {
    question: "Does transcription require an internet connection?",
    answer:
      "No, transcription uses Apple's on-device speech recognition by default. Your audio never leaves your Mac. Network recognition is available as an opt-in option for additional languages.",
  },
  {
    question: "What's the maximum recording length?",
    answer:
      "There's no software limit on recording length. Recording duration is limited only by your available storage space. Lumary uses fragmented MP4 to protect against data loss during long recordings.",
  },
  {
    question: "Can I use Lumary for live streaming?",
    answer:
      "Lumary is designed for recording, not live streaming. However, composite recordings with screen and camera are perfect for creating VOD content from stream sessions.",
  },
  {
    question: "Does Lumary support multiple displays?",
    answer:
      "Yes, you can record from any connected display, and even record multiple displays simultaneously. Each display records to its own file for maximum flexibility.",
  },
  {
    question: "Where are my recordings saved?",
    answer:
      "You choose the output folder. Lumary creates a session directory for each recording containing all output files, manifests, and transcripts.",
  },
  {
    question: "Can I record just a window instead of the full screen?",
    answer:
      "Yes, Lumary supports full display capture, single window capture, and custom region capture modes.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. Lumary has no cloud services, no analytics, and no accounts. Everything processes on your Mac, and files save where you choose. We never see your recordings or transcripts.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-400">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Everything you need to know about Lumary.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="divide-y divide-zinc-800">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  className="flex w-full items-start justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-base font-semibold text-white pr-8">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center shrink-0">
                    <svg
                      className={`h-5 w-5 text-zinc-500 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-4 pr-12">
                    <p className="text-base text-zinc-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import HeroSection from "@/components/HeroSection";
import { useState } from "react";

export default function HeroPage() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      <HeroSection />

      {/* Floating WhatsApp Join Button */}
      {showPopup && (
        <div className="fixed bottom-6 right-6">
          <div className="relative">
            <div className="bg-white shadow-lg p-3 rounded-2xl text-sm text-gray-800 w-56 mb-2">
              📢 Join our WhatsApp Channel for updates!
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-1 right-2 text-gray-500 text-xs"
              >
                ✕
              </button>
            </div>
            <a
              href="https://whatsapp.com/channel/YOUR_CHANNEL_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 2.11.55 4.16 1.6 5.98L.5 23.5l5.7-1.57A11.44 11.44 0 0 0 12 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5zm0 21c-1.8 0-3.56-.48-5.1-1.39l-.36-.21-3.39.94.92-3.31-.23-.37A9.47 9.47 0 0 1 2.5 12c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5zm4.95-7.1c-.27-.14-1.6-.79-1.85-.88-.25-.1-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.6.07-.27-.14-1.14-.42-2.18-1.33-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.48-.85-2.03-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
              </svg>
              Join
            </a>
          </div>
        </div>
      )}
    </>
  );
}

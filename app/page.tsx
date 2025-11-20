import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Link
        href={"https://incubationcell.netlify.app"}
        className="p-2 border-2 rounded-2xl bg-amber-300"
      >
        new website
      </Link>
    </div>
  );
}

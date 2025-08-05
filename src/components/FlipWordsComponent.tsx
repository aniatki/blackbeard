import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FlipWordsComponent({ optionalBefore, words, optionalAfter }: { optionalBefore?: string, words: string[], optionalAfter?: string }) {
  return (
    <div className="py-12 flex justify-center items-center px-4">
      <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        {optionalBefore}
        <FlipWords words={words} />
        {optionalAfter}
      </div>
    </div>
  );
}

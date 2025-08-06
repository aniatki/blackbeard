"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsComponent() {
  return (
    <div className="py-16 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "Best",    
    name: "Nelutz",
    title: "★★★★★",
  },
  {
    quote: "Great hair cut and really good staff",
    name: "Noel",
    title: "★★★★★",
  },
  {
    quote: "100% recommended! Explain to him clearly and He will master it. They are all professionals and friendly! Thanks guys, Thanks Geovani!",
    name: "Fernando",
    title: "★★★★★",
  },
  {
    quote: "Love this place, always look after me!",
    name: "Ian",
    title: "★★★★★",
  },
  {
    quote: "I'm always happy with the outcome and regularly going there for a haircut.",
    name: "Piotr",
    title: "★★★★★",
  },
  {
    quote: "excellent service 👏 I've been coming to this barbershop for nearly a year . one of the best in the city.",
    name: "Martin",
    title: "★★★★★",
  },
  {
    quote: "Very welcoming staff , beverages offered on arrival . Hair cut was 10/10",
    name: "Jake",
    title: "★★★★★",
  },
  {
    quote: "An excellent barbers with great friendly staff",
    name: "Callan",
    title: "★★★★★",
  },
];

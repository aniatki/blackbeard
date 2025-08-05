"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";


const servicesWomen = [
    {title: "Women - Wash, Scissors Haircut & Blow Dry",href: "", source: "", description: "€60.00 (1 hr)",},
]
const servicesMen = [
    {title: "Haircut - We can wash if you want :)",href: "", source: "", description: "€30.00 (45 mins - 1 hr)",},
    {title: "Beard Trim",href: "", source: "", description: "€25.00 (25 mins)",},
    {title: "Haircut & Beard",href: "", source: "", description: "from €45.00 (1 hr 10 mins - 1 hr 25 mins)",},
    {title: "Beard Therapy (Hot Towel + Facial Cleaning + Massage)",href: "", source: "", description: "€35.00 (45 mins)",},
    {title: "Haircut, Beard Therapy & Eyebrows",href: "", source: "", description: "€60.00 (1 hr 20 mins)",},
    {title: "Haircut & Keratin Treatment (Short hair only)",href: "", source: "", description: "from €80.00 (1 hr 45 mins - 2 hrs 15 mins)",},
    {title: "Keratin Treatment (Short hair only)",href: "", source: "", description: "from €65.00 (1 hr - 1 hr 30 mins)",},
    {title: "Eyebrow Trim & Shape",href: "", source: "", description: "€10.00 (10 mins)",},
    {title: "Hydration Treatment",href: "", source: "", description: "from €15.00 (20 mins - 1 hr 40 mins)",},
    {title: "Color or Bleach Full Head (Short hair only)",href: "", source: "", description: "from €100.00 (2 hrs 30 mins - 3 hrs)",},
    {title: "Hair Removal (Ears & Nose)",href: "", source: "", description: "€15.00 (15 mins)",},
    {title: "Highlights (Short Hair Only)",href: "", source: "", description: "€15.00 (15 mins)",},
]

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-sm mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        
        <MenuItem setActive={setActive} active={""} item="Blackbeard">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Women">
          <div className={`  text-xs text-balance max-w-2xs grid ${servicesWomen.length < 2 ? "grid-cols-1" : "grid-cols-2"} gap-10`}>
                {servicesWomen.map((item, i) => (
                    <ProductItem key={i}
                      title={item.title}
                      href={item.href}
                    //   src={item.source}
                      description={item.description}
                    />
                ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Men">
          <div className={`  text-xs text-balance max-w-2xs grid ${servicesMen.length < 2 ? "grid-cols-1" : "grid-cols-2"} gap-x-10`}>
                {servicesMen.map((item, i) => (
                    <ProductItem key={i}
                      title={item.title}
                      href={item.href}
                    //   src={item.source}
                      description={item.description}
                    />
                ))}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

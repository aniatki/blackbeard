"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [women, setWomen] = useState<any>([])
  const [men, setMen] = useState<any>([])
  
  const fetchData = async (col: string) => {
    const snapshot: any = await getDocs(collection(db, col))
    return snapshot.docs.map((doc: any) => ({ 
      id: doc.id, 
      duration: doc.data().duration, 
      price: doc.data().price, 
      title: doc.data().title 
    }))
  }

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const servicesWomen = await fetchData('services-women')
        const servicesMen = await fetchData('services-men')

        setWomen(servicesWomen)
        setMen(servicesMen)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAllData()
  }, [])

  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-sm mx-auto z-50 select-none", className)}
    >
      <Menu setActive={setActive}>

        <MenuItem setActive={setActive} active={""} item="Blackbeard">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Women">
          <div className={`  text-xs text-balance max-w-2xs grid ${women.length < 2 ? "grid-cols-1" : "grid-cols-2"} gap-10`}>
            {women.map((item: any, i: any) => (
              <ProductItem key={i}
                title={item.title}
                price={item.price}
                duration={item.duration}
              />
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Men">
          <div className={`  text-xs text-balance max-w-2xs grid ${men.length < 2 ? "grid-cols-1" : "grid-cols-2"} gap-x-10`}>
            {men.map((item: any, i: any) => (
              <ProductItem key={i}
                title={item.title}
                price={item.price}
                duration={item.duration}
              />
            ))}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Redstone from "../public/redstone.png"
import Diamond from "../public/diamond.png"
import Gold from "../public/gold.png"
import { Footer, Header } from '@/components'

export default function Home() {

  
  const minecraftItems: { [key: string]: string } = {
    '11': "Gold", 
    '12': "Diamond",
    '21': "Ender Pearl",
    '1B': "Redstone",
    '1A': "Oak Wood",
    '22': "Bamboo Block",
    '2A': "Stone",
    '2B': "Cobblestone",
    'A1': "Netherrack",
    'A2': "Sand",
    'AA': "Diorite",
    'AB': "Ice",
    'B1': "Brown Mushroom Block",
    'B2': "Sandstone",
    'BA': "Prismarine",
    'BB': "Hardened Clay",

    // 4 button which produce 16 different combination 
    // Add More Item require more middle button 
  };
  
  const [combination, setCombination] = useState("");


  // each inventory their own image and count. by default everything is invisible
  const [inventorySlots, setInventorySlots] = useState([
    {
      image: Gold,
      combination: '11',
      isVisible: false,
      count: "",
    },
    {
      image: Redstone,
      combination: '1B',
      isVisible: false,
      count: "",
    },
    {
      image: Diamond,
      combination: '12',
      isVisible: false,
      count: "",
    },
  ]);


  // i split the item button with quanitty so that it doesnt allow anymore input from the middle button
  // for the item button
  const handleButtonClick = (value: string | number) => {
    if (combination.length < 2) {
      const newCombination = combination + value;
      setCombination(newCombination);
    }
    else {
      console.log("Maximum of 2 digits allowed for the first combination.");
    }
  };

  // for the quantity button
  const handleQuantityButtonClick = (value: string) => {
    if (combination.length === 2) {
      const newCombination = combination + value.toString();

      // split it into two digits firstTwo and lastTwo
      const firstTwoDigits = newCombination.substring(0, 2);
      const lastTwoDigits = newCombination.substring(2, 4);
      const item = minecraftItems[firstTwoDigits];
      if (item) {
        console.log(`You Got ${lastTwoDigits} ${item}`);
        const newCount = parseInt(lastTwoDigits);
    
        /* item on top is set to true so it will appear.
        the newCount will be increment by lastTwoDigits and be converted into string*/ 
      const updatedInventorySlots = inventorySlots.map(slot => {
        if (slot.combination === firstTwoDigits) {
          return {
            ...slot,
            isVisible: true,
            count: newCount.toString(),
          };
        }
        return slot;
      });
      
      // once the lastDigit button have been presed then the following will set of the above function
      setInventorySlots(updatedInventorySlots);

      } else {
        console.log(`Combination: ${newCombination} - No matching item found`);
      }
      setCombination('');
    }
  };

  return (
    <main className="mainBody">
      <Header handleQuantityButtonClick={handleQuantityButtonClick} />
        <div>
          <div className="buttonContainer">
            <div className="buttonGrid">
              <button onClick={() => handleButtonClick(1)} className="minecraftBtn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">1</button>
              <button onClick={() => handleButtonClick(2)} className="minecraftBtn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">2</button>
            </div>
            <div className="buttonGrid">
              <button onClick={() => handleButtonClick("A")} className="minecraftBtn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">A</button>
              <button onClick={() => handleButtonClick("B")} className="minecraftBtn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">B</button>
            </div>
          </div>        
        </div>
        <Footer inventorySlots={inventorySlots} />
    </main>
  )
}
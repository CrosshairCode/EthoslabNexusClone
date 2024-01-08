import React from 'react';
import Image, { StaticImageData } from 'next/image';

type FooterProps = {
  inventorySlots: {
    image: StaticImageData;
    combination: string;
    isVisible: boolean;
    count: string;
  }[];
};

const Footer = ({ inventorySlots }: FooterProps) => {
  return (
    <footer className="flex justify-center">
      <div className="flex gap-1">
        {inventorySlots.map((slot, index) => (
          <div
            key={index}
            className="slot mx-auto w-64 truncate border-4 hover:text-yellow-200"
          >
            {slot.isVisible && <Image alt="Redstone" src={slot.image} />}
            {slot.isVisible && <div id="slotNum">{slot.count}</div>}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

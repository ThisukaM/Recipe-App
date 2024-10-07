"use client";

import Link from 'next/link';
import { Button } from "@nextui-org/react";

export default function Header() {
  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center">
      <Link
        href="/"
        passHref
        className="text-xl md:text-4xl font-bold text-purple-700 cursor-pointer">
  
          MEALMATCH
        
      </Link>
      <div className="inline-block cursor-pointer md:hidden">
        <div className="w-8 h-1 bg-purple-700 my-1.5"></div>
        <div className="w-8 h-1 bg-purple-700 my-1.5"></div>
        <div className="w-8 h-1 bg-purple-700 my-1.5"></div>
      </div>
      <div className="space-x-4 hidden md:block">
        <Button color="primary" variant="ghost" size="lg">
          Saved Recipes
        </Button>
        <Button color="primary" variant="ghost" size="lg">
          About
        </Button>
      </div>
    </div>
  );
}

'use client';

import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Navigation: React.FC = () => {
    const router = useRouter();

    return (
        <nav className="bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <Link href="/">
                  <p className="text-white hover:text-gray-300">home page</p>
                </Link>
                <Link href="/blog">
                  <p className="text-white hover:text-gray-300">blog page</p>
                </Link>
                <Link href="/about">
                  <p className="text-white hover:text-gray-300">about us page</p>
                </Link>       
                <p className="absolute top-2 right-10">
            <Button onClick={() => router.back()}>back</Button>
                </p>
              </div>
            </div>
          </div>
        </nav>
      );
};

export default Navigation;

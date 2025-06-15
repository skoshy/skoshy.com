"use client";

import { Button } from "@/modules/ui/button";
import { ThemeToggle } from "@/modules/theme/theme-toggle";
import { HiButton } from "@/modules/hi-button";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">skoshy.com</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                Blog
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" size="sm">
                Projects
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="sm">
                About
              </Button>
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <HiButton />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
} 

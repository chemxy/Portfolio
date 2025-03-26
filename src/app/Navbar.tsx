"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? "text-blue-500" : "text-gray-200";
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/" className={`hover:text-blue-400 transition ${isActive("/")}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={`hover:text-blue-400 transition ${isActive("/about")}`}>
            About
          </Link>
        </li>
        <li>
          <Link href="/experience" className={`hover:text-blue-400 transition ${isActive("/experience")}`}>
            Experience
          </Link>
        </li>
        <li>
          <Link href="/skills" className={`hover:text-blue-400 transition ${isActive("/skills")}`}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="/education" className={`hover:text-blue-400 transition ${isActive("/education")}`}>
            Education
          </Link>
        </li>
        <li>
          <Link href="/projects" className={`hover:text-blue-400 transition ${isActive("/projects")}`}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`hover:text-blue-400 transition ${isActive("/contact")}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
} 
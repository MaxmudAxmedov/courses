'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SiCodersrank } from "react-icons/si";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };
  return (

    <div className='container'>
      <div className='flex items-center justify-between'>
        <SiCodersrank size={32} />
        <nav className='flex items-center py-4 justify-between w-[350px]'>
          <Link className='dark:text-white dark:hover:text-gray-500 transition-all hover:text-gray-500 text-gray-900 hover:border-b hover:border-gray-500 border-b border-transparent ' href='/'>Home</Link>
          <Link className='dark:text-white dark:hover:text-gray-500 transition-all hover:text-gray-500 text-gray-900 hover:border-b hover:border-gray-500 border-b border-transparent ' href='/about'>About</Link>
          <Link className='dark:text-white dark:hover:text-gray-500 transition-all hover:text-gray-500 text-gray-900 hover:border-b hover:border-gray-500 border-b border-transparent ' href='/test'>Test</Link>
          <Link className='dark:text-white dark:hover:text-gray-500 transition-all hover:text-gray-500 text-gray-900 hover:border-b hover:border-gray-500 border-b border-transparent ' href='/contact'>Contact</Link>
          <Link className='dark:text-white dark:hover:text-gray-500 transition-all hover:text-gray-500 text-gray-900 hover:border-b hover:border-gray-500 border-b border-transparent ' href='/learning'>Learning</Link>
        </nav>

        <button onClick={toggleDarkMode}>
          <MdDarkMode size={24} />
        </button>
      </div>
    </div>
  )
}

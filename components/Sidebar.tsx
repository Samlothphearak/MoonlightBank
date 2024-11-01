'use client';

import React from 'react';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Sidebar = ({ user }: RightSidebarProps) => {
    const pathname = usePathname();
    
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                    <img
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="MoonLightBank Logo"
                        className="size-[24px] max-xl:size-14" // Combined into one line
                    />
                    <h1 className="sidebar-logo">ABA</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn('sidebar-link', { 'bg-bankGradient': isActive })}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </section>
    );
};

export default Sidebar;
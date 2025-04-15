'use client';
import {
    BarChart,
    Building2,
    FileText,
    LayoutDashboard,
    ListPlus,
    LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation'

interface SidebarNavItem {
    title: string;
    href: string;
    icon?: LucideIcon;
}

const sidebarNavItems: SidebarNavItem[] = [
    {
        title: 'Yleiskatsaus',
        href: '/admin',
        icon: LayoutDashboard,
    },
    {
        title: 'Palvelut',
        href: '/admin/services',
        icon: Building2,
    },
    {
        title: 'Blogipostaukset',
        href: '/admin/blog',
        icon: FileText,
    },
    {
        title: 'Uutiset',
        href: '/admin/news',
        icon: ListPlus,
    },
    {
        title: 'Pääsisältö',
        href: '/admin/base-content',
        icon: BarChart,
    },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-background static">
            <div className="w-64 bg-card p-4 border border-muted-foreground absolute top-0 left-0 h-screen overflow-y-auto z-10">
                <h2 className="text-lg font-semibold mb-4">Hallintapaneeli</h2>
                <nav className="flex flex-col space-y-2">
                    {sidebarNavItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'flex items-center p-2 rounded-md hover:bg-muted-foreground/10',
                                usePathname() === item.href ? 'bg-muted-foreground/10' : ''
                            )}
                        >
                            {item.icon && <item.icon className="mr-2" />}
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <div className="flex-1 p-8">
                </div>
            </div>
            {children}
        </div>
         
    );
}
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title?: string;
}

export default function AppLayout({ children, title = 'App' }: Props) {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link href="/" className="text-xl font-semibold text-gray-900">
                            {title}
                        </Link>
                    </div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}

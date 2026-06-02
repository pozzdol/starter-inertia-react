import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome" />
            <div className="text-center py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Laravel + Inertia + React
                </h1>
                <p className="text-lg text-gray-600">
                    Dibangun dengan TypeScript, Tailwind CSS, dan PostgreSQL.
                </p>
            </div>
        </AppLayout>
    );
}

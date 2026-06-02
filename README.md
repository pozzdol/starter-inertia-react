# Laravel + Inertia + React Starter

Starter kit opinionated untuk membangun aplikasi web modern dengan stack yang sudah terkonfigurasi dan siap pakai.

## Tech Stack

| Layer    | Teknologi            |
| -------- | -------------------- |
| Backend  | Laravel 13, PHP 8.3  |
| Frontend | React 19, TypeScript |
| Bridge   | Inertia.js v3        |
| Styling  | Tailwind CSS v4      |
| Bundler  | Vite 8               |
| Database | PostgreSQL           |

## Fitur

- **Zero config** — satu command untuk setup lengkap
- **TypeScript** — type-safe dari frontend ke props Inertia
- **Tailwind CSS v4** — utility-first styling dengan konfigurasi terbaru
- **App title otomatis** — `<Head title="Halaman" />` otomatis menjadi `Halaman | AppName`
- **Layout siap pakai** — `AppLayout` dengan navbar dan struktur halaman
- **Dev experience** — server, queue, log, dan Vite berjalan bersamaan dengan satu command

## Prasyarat

- PHP >= 8.3
- Composer
- Node.js >= 20
- PostgreSQL

## Instalasi

### Via Composer (direkomendasikan)

```bash
composer create-project pozzdol/starter-inertia-react my-app
cd my-app
```

Lalu konfigurasi database di `.env`:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=nama_database
DB_USERNAME=postgres
DB_PASSWORD=password_anda
```

Kemudian jalankan migrasi dan setup frontend:

```bash
php artisan migrate
npm install
npm run build
```

### Via Git Clone

```bash
git clone https://github.com/pozzdol/starter-inertia-react.git my-app
cd my-app
composer run setup
```

Script `setup` otomatis menjalankan:

- `composer install`
- Menyalin `.env.example` ke `.env`
- Generate `APP_KEY`
- Menjalankan migrasi database
- `npm install` dan `npm run build`

## Menjalankan Development Server

```bash
composer run dev
```

Command ini menjalankan semuanya secara paralel:

| Process                    | Keterangan     |
| -------------------------- | -------------- |
| `php artisan serve`        | Laravel server |
| `npm run dev`              | Vite HMR       |
| `php artisan queue:listen` | Queue worker   |
| `php artisan pail`         | Log viewer     |

Buka http://localhost:8000.

## Struktur Frontend

```
resources/js/
├── app.tsx           # Entry point Inertia
├── Pages/            # Halaman (satu file = satu route)
│   └── Welcome.tsx
├── Layouts/
│   └── AppLayout.tsx # Layout utama dengan navbar
├── Components/       # Komponen reusable
└── types/            # TypeScript type definitions
```

## Membuat Halaman Baru

Buat file baru di `resources/js/Pages/`:

```tsx
// resources/js/Pages/About.tsx
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function About() {
    return (
        <AppLayout>
            <Head title="About" />
            <h1>About</h1>
        </AppLayout>
    );
}
```

`<Head title="About" />` otomatis menghasilkan title `About | AppName` di browser.

## Passing Props dari Controller

```php
// routes/web.php atau Controller
Route::get('/about', fn () => inertia('About', [
    'user' => auth()->user(),
]));
```

```tsx
// resources/js/Pages/About.tsx
interface Props {
    user: { name: string; email: string };
}

export default function About({ user }: Props) {
    return (
        <AppLayout>
            <Head title="About" />
            <p>Hello, {user.name}</p>
        </AppLayout>
    );
}
```

## Testing

```bash
composer run test
```

## Build Production

```bash
npm run build
php artisan optimize
```

## Lisensi

MIT — bebas digunakan untuk proyek personal maupun komersial.

import { useTranslations } from 'next-intl';

export default function Home() {
  // 1. Activăm funcția de traducere pentru secțiunea "HomePage"
  const t = useTranslations('HomePage');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 text-center py-32 px-4">
        
        {/* 2. Titlul tradus (vine din en.json sau de.json) */}
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-7xl">
          {t('title')}
        </h1>

        {/* 3. Descrierea tradusă */}
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {t('description')}
        </p>

        {/* Un buton simplu de design (fără funcție momentan) */}
        <div className="mt-4 flex gap-4">
          <button className="rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-500 font-semibold transition shadow-lg">
            Contact
          </button>
        </div>

      </main>
    </div>
  );
}
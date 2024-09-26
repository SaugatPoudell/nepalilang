"use client"
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/routing';
import { useRouter } from 'next/navigation';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  const router = useRouter();
  return (
    <div>
        <button onClick={() => router.push('/np')}>Press</button>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
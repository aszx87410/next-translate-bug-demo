'use client';

import useTranslation from 'next-translate/useTranslation'

export default function Heading() {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>Client: {t`layout-title`}</h1>
    </div>
  )
}

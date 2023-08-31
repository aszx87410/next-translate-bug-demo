import useTranslation from 'next-translate/useTranslation'
import i18n from '../../../i18n'
import { redirect } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { t, lang } = useTranslation('common')

  return (
    <div>
      ==== inner layout ====
      <h2>{t`layout-title`}</h2>
      {children}
    </div>
  )
}

export default function Layout({
  children, className = ''
}: {
  children: React.ReactNode,
  className: string
}) {
  return (
    <main className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 l:p-16 md:p-12 sm:p-8 ${className}`}>
      {children}
    </main>
  )
}

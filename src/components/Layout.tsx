export default function Layout({
  children, className = ''
}: {
  children: React.ReactNode,
  className: string
}) {
  return (
    <main className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 ${className}`}>
      {children}
    </main>
  )
}

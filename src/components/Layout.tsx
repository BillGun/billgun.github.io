export default function Layout({
  children, className = ''
}: {
  children: React.ReactNode,
  className: string
}) {
  return (
    <main className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
      {children}
    </main>
  )
}

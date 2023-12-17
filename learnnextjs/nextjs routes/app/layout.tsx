
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <h1>Header -company -layout</h1>

        {children}
        <h1>Footer -company -layout</h1>
        </body>
    </html>
  )
}

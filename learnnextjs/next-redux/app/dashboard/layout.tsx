
export default function DashboardLoayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Dashboard layout</h1>
     {children}
      </body>
    </html>
  );
}
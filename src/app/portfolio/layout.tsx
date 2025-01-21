export default function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[100vh] overflow-y-scroll">{children}</div>;
}

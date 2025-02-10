import NavigationBar from "@/component/NavBar";

export default function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" overflow-scroll w-[80vw] md:w-[90vw] mx-auto">
        {children}
      </div>
    </>
  );
}

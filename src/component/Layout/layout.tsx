import Header from "../header/header";
import SideBar from "../sidebar/page";

export default function Mainlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />

      <div className="flex flex-col flex-1 lg:ml-80 min-h-screen">
        <Header />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

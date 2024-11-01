import { Navbar } from "@/components/layout/Navbar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 max-w-screen-xl w-full mx-auto py-8">
        <Outlet />
      </main>
      <footer className="bg-zinc-200 w-full">
        <div className="max-w-screen-xl mx-auto py-3">
          <p className="text-sm">Cloud Storage 2024 @ Aleksandr Makarov</p>
        </div>
      </footer>
    </div>
  );
};

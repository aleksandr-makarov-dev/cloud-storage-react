import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { NotFound } from "./not-found";
import { FileSystemPage } from "./filesystem";
import { MainLayout } from "./layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="filesystem">
              <Route path=":prefix?" element={<FileSystemPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

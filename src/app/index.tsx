import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { NotFound } from "./not-found";
import { FileSystemPage } from "./filesystem";
import { MainLayout } from "./layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="filesystem">
            <Route index element={<FileSystemPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

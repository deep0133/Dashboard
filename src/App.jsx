import Dashboard from "./pages/Dashboard";
import PageLayout from "./Layouts/PageLayout";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";
import User from "./pages/User";
import Sites from "./pages/Sites";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";
import Institution from "./pages/Institution";
export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/category' element={<Category />} />
        <Route path='/users' element={<User />} />
        <Route path='/sites' element={<Sites />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/institution' element={<Institution />} />
      </Routes>
    </PageLayout>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import RegisterBook from "./components/registerBook";
import CreateSaleForm from "./components/createSaleform";
import CreatePurchaseForm from "./components/CreatePurchaseForm";

const AppRoutes = () => {

    return (
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="nova-venda" element={<CreateSaleForm />} />
                <Route path="cadastrar-livro" element={<RegisterBook />} />
                <Route path="fazer-pedido" element={<CreatePurchaseForm />} />
            </Routes>
    )
}

export default AppRoutes;
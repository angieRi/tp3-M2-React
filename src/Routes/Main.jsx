import Home from "../pages/Home";
import {
    Routes,
    Route
} from "react-router-dom"
import ListProducts from "../pages/ListProducts";

function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ListProducts />} />
        </Routes>
    );
}

export default Main;

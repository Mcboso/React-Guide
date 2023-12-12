import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />
//     <Route path='/products/' element={<ProductsPage/>} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinitions);
const router = createBrowserRouter([
  // 하나의 객체가 곧 하나의 라우터
  // /로 시작하면 절대경로, 그렇지 않으면 상대경로
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> }, // path: ""
      { path: "products", element: <ProductsPage />},
      { path: "products/:productId", element: <ProductDetailPage/>} // :로 경로 안에서 placeholder 처럼 사용 가능
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

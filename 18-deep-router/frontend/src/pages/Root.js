import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation"

function RootLayout() {
  const events = useLoaderData();
  const navigation = useNavigation();

  return (
    <div>
      <MainNavigation/>
      <main>
        {/* {navigation.state === 'loading' && <p>loading</p> } */}
        <Outlet/>
      </main>
    </div>
  )
};

export default RootLayout;
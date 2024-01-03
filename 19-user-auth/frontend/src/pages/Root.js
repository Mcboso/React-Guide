import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../components/util/auth";

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) return;
    if (token === 'EXPIRED') { // token 만료된 경우
      submit(null, { action: '/logout', method: 'post' }); // 로그아웃 트리거
      return;
    }
    const tokenDuration = getTokenDuration();
    
    setTimeout(() => { // 잔여 토큰 유효 기간 설정
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

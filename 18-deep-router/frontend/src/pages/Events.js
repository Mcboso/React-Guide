import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>loading...</p>}>
      <Await resolve={events}>
        {/* promise를 resolve 값으로, promise가 resolve될 때까지 기다림 */}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
        {/* data 도착하면 실행할 함수 */}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetch events" }), {
    //   status: 500,
    // Response 직접 생성하기 귀찮음 => json() 리턴 (json 형식의 데이터 포함하는 response 객체 리턴)
    return json({ message: "could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events; // return하면 렌더링되고있는 페이지에 제공
    // return response; // response 를 return 가능 (defer 사용시에는 사용 불가능)

  }
}

export function loader() {
  // defer을 통해 데이터 가져오기를 연기
  return defer({
    // 모든 http 요청을 객체 안에 넣어줌
    events: loadEvents(), // async 함수이기에 promise 리턴
  });
}

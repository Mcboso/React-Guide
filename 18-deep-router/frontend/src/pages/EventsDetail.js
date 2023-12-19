import { useLoaderData, json, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventDetailPage() {
  // const params = useParams();
  const { event, events } = useRouteLoaderData('event-detail'); // 상위 route의 loader data 이용하기 위해

  return( 
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent}/>}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>loading...</p>}>
      <Await resolve={events}>
        {loadedEvents => <EventsList events={loadedEvents} />}
      </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if(!response.ok) {
    return json({message: 'could not fetch detail'}, {status: 500});
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export async function loader({request, params}) {
  const id = params.eventId;
  return defer({ // 데이터를 받아오기 전에 무언가를 표시하고 싶을 때 defer 사용
    event: await loadEvent(id), // eventDetail 데이터 받아온 후에 렌더링
    events: loadEvents(),
  });
};

export async function action({request, params}) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    // method: 'DELETE'
    method: request.method
  })
  if(!response.ok) {
    throw json({
      message: 'could not delete event'
    }, {status: 500});
  } else {
    return redirect('/events')
  }
};



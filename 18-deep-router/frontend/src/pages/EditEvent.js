import EventForm from "../components/EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

function EditEventPage() {
  const data = useRouteLoaderData('event-detail'); // 더 높은 수준의 loader 사용하기 위해 useRouteLoaderData 사용
  return <EventForm event={data.event} method='PATCH'/>;
}

export default EditEventPage;
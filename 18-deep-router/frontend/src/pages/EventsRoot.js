import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation"

function EventsLayout() {
  return (
    <div>
      <EventsNavigation/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
};

export default EventsLayout;
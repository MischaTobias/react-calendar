import { useState } from "react";

import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";

import { CalendarEvent, CalendarModal, NavBar } from "../";
import { getMessagesEN, localizer } from "../../helpers";

export const events = [
  {
    id: 1,
    title: "Comicon",
    notes: "Wear your favorite suit!",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#007bff",
    user: {
      _id: 1,
      name: "Mischa Tobias",
    },
  },
];

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
      padding: 5,
    };

    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };
  const onSelect = (event) => {
    console.log({ click: event });
  };
  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
  };

  return (
    <>
      <NavBar />
      <Calendar
        components={{
          event: CalendarEvent,
        }}
        defaultView={lastView}
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        events={events}
        localizer={localizer}
        messages={getMessagesEN()}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        startAccessor="start"
        style={{ height: "calc(100vh - 80px)" }}
      />

      <CalendarModal />
    </>
  );
};

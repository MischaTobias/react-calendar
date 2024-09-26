import { useState } from "react";

import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
  NavBar,
} from "../";
import { getMessagesEN, localizer } from "../../helpers";

import { useCalendarStore, useUiStore } from "../../hooks";

export const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();
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
    openDateModal();
  };
  const onSelect = (event) => {
    setActiveEvent(event);
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
      <FabAddNew />
      <FabDelete />
    </>
  );
};

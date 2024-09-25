import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { NavBar } from "../";
import { addHours } from "date-fns";

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
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected });

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

  return (
    <>
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEN()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};

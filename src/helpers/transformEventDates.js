import { parseISO } from "date-fns";

export const transformEventDates = (events = []) => {
  return events.map((event) => {
    return {
      ...event,
      start: parseISO(event.start),
      end: parseISO(event.end),
    };
  });
};

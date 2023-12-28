import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Calendar() {
  const events = [
    {
      title: "Test Title",
      start: "2023-12-05T08:00:00",
      end: "2023-12-05T09:00:00",
    },
  ];
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"80vh"}
        //!viewport height
        //?It works like the percentage unit as well. Specifying 10vh is equivalent to occupying 10% of entire visible screen height.
        events={events}
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content: "<p> This is a test paragraph for the calender!</p>",
            html: true,
          });
        }}
      />
    </div>
  );
}

export default Calendar;

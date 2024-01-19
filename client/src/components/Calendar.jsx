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
      title: "Deluxe Chocolate Cake",
      start: "2024-01-03T08:00:00",
      end: "2024-01-03T09:00:00",
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
            content: "<p> Two servings of cake while at Matthews birthday</p>",
            html: true,
          });
        }}
      />
      <footer id="footerCopyrightCalenderWidth">
        <p id="copyrightParagraphColor">
          Copyright &copy;2023 Cheat Day Calendar; Designed by,
          <span id="copyrightSpan">
            <a id="copyrightAnchor" href="https://github.com/PaulDeUlloa">
              p. de ulloa
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default Calendar;

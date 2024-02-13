import React, { useState } from "react";

const appointmentTimeOfDay = (startsAt) => {
  const date = new Date(startsAt);
  const h = date.getHours().toString().padStart(2, '0'); // Get hours in 24-hour format
  const m = date.getMinutes().toString().padStart(2, '0'); // Get minutes
  return `${h}:${m}`;
};


export const Appointment = ({
  customer,
  service,
  stylist,
  notes,
  startsAt,
}) => (
  <div id="appointmentView">
    <h3>
      Today&rsquo;s appointment at{" "}
      {appointmentTimeOfDay(startsAt)}
    </h3>
    <table>
      <tbody>
        <tr>
          <td>Customer</td>
          <td>
            {customer.firstName} {customer.lastName}
          </td>
        </tr>
        <tr>
          <td>Phone number</td>
          <td>{customer.phoneNumber}</td>
        </tr>
        <tr>
          <td>Stylist</td>
          <td>{stylist}</td>
        </tr>
        <tr>
          <td>Service</td>
          <td>{service}</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>{notes}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const PresentationDayView = ({
  appointments,
}) => {
  const [
    selectedAppointment,
    setSelectedAppointment,
  ] = useState(0);

  return (
    <div id="presentationDayView">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button
              className={
                i === selectedAppointment
                  ? "toggled"
                  : ""
              }
              type="button"
              onClick={() =>
                setSelectedAppointment(i)
              }
            >
              {appointmentTimeOfDay(
                appointment.startsAt
              )}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>
          There are no appointments scheduled for
          today.
        </p>
      ) : (
        <Appointment
          {...appointments[selectedAppointment]}
        />
      )}
    </div>
  );
};
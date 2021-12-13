export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  let results = [];
  for (let eachDay of days) {
    if (eachDay.name === day) {
      for (let appointment of eachDay.appointments) {
        results.push(appointments[appointment]);
      }
    }
  }
  return results;
}
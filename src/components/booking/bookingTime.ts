export function getSessionTimeRange(time: string) {
  const [clock, period, timezone] = time.split(" ");
  const [hours, minutes] = clock.split(":").map(Number);

  const startHour = (hours % 12) + (period === "PM" ? 12 : 0);
  const endMinutes = (startHour * 60 + minutes + 15) % (24 * 60);

  const endHour = Math.floor(endMinutes / 60);
  const endMinute = String(endMinutes % 60).padStart(2, "0");
  const endPeriod = endHour >= 12 ? "PM" : "AM";
  const endClock = `${endHour % 12 || 12}:${endMinute}`;

  return `${clock} ${period} – ${endClock} ${endPeriod} ${timezone}`;
}

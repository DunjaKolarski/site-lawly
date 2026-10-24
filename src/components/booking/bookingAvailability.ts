const times = [
  "12:00 PM EST",
  "12:30 PM EST",
  "1:30 PM EST",
  "2:30 PM EST",
  "3:00 PM EST",
  "3:20 PM EST",
  "3:45 PM EST",
  "5:30 PM EST",
  "5:50 PM EST",
  "6:20 PM EST",
  "6:45 PM EST",
  "8:30 PM EST",
];

export const availableDays = [
  { id: "today", label: "Today", times: times.slice(0, 8) },
  { id: "tomorrow", label: "Tomorrow", times: times.slice(0, 8) },
  { id: "may-26", label: "Monday 5/26", times },
  { id: "may-27", label: "Tuesday 5/27", times: times.slice(0, 4) },
  {
    id: "may-29",
    label: "Thursday 5/29",
    times: [...times.slice(0, 4), ...times.slice(8)],
  },
  { id: "june-4", label: "Monday 6/4", times },
  { id: "june-5", label: "Tuesday 6/5", times },
];

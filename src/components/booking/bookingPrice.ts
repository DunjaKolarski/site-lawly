export function getConsultingPrice(hours: number) {
  if (hours <= 2) {
    return hours * 66;
  }

  return 2 * 66 + (hours - 2) * 50;
}

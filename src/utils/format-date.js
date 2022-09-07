import dayjs from 'dayjs';

export function formatMonthDay(time) {
  return dayjs(time).format('MM月DD日');

}

export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day');
}
import { defineStore  } from "pinia";
import { formatMonthDay, getDiffDays } from '@/utils/format-date';

const nowDate = new Date();
const nextDay = new Date();
nextDay.setDate((new Date()).getDate() + 1);

const useMainStore = defineStore('main', {
  state: () => ({
    startDate: nowDate,
    endDate: nextDay
  }),
  getters: {
    startDateFormated() {
      return formatMonthDay(this.startDate);
    },
    endDateFormated() {
      return formatMonthDay(this.endDate);
    },
    dateInterval() {
      return getDiffDays(this.startDate, this.endDate);
    }
  }
});

export default useMainStore;
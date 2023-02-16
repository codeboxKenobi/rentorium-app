<template>
  <div class="datepicker-body datepicker-body--days">
    <div class="datepicker-days-of-week">
      <div v-for="day in daysOfWeek" :key="day" class="datepicker-day-of-week">{{ day }}</div>
    </div>

    <div class="datepicker-days-wrapper">
      <div
        v-for="date in dates"
        :key="`${date.getDate()}.${date.getMonth()}`"
        class="datepicker-day"
        :class="[date.getMonth() !== bufferDate.getMonth() ? 'datepicker-day--thin' : '', isSelected(date) ? 'datepicker-day--selected' : '']"
        @click="selectDay(date)"
      >{{ date.getDate() }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import DateUtils from "@/assets/utils/utils";

const dateUtils = new DateUtils();

export default {
  name: "Days",
  props: {
    selectedDate: {
      type: Date,
      required: true
    },

    bufferDate: {
      type: Date,
      required: true
    }
  },
  data: () => ({
    daysOfWeek: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
  }),
  computed: {
    dates: function() {
      return dateUtils.computeDaysWithOffset(this.bufferDate);
    }
  },
  methods: {
    selectDay(date: any ) {
      this.$emit("selectDay", date);
    },

    isSelected(date: any ) {
      return (
        this.selectedDate.getDate() === date.getDate() &&
        this.selectedDate.getMonth() === date.getMonth() &&
        this.selectedDate.getFullYear() === date.getFullYear()
      );
    }
  }
};
</script>

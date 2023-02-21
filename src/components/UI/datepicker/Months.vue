<template>
  <div class="datepicker-body datepicker-body--months">
    <div
      v-for="month in months"
      :key="month"
      class="datepicker-month"
      :class="date.getMonth() === months.indexOf(month) ? 'datepicker-month--selected' : ''"
      @click="selectMonth(months.indexOf(month))"
    >{{ month }}</div>
  </div>
</template>

<script>
export default {
  name: "Years",
  props: {
    date: {
      type: Date,
      required: true
    }
  },
  data: () => ({
    months: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ]
  }),
  methods: {
    selectMonth(month) {
      this.$emit("selectMonth", month);
    }
  }
};
</script>

<template>
  <div class="datepicker">
    <div class="datepicker-header">
      <div
        v-html="displayed"
        class="datepicker-header-info"
        :class="selected==='years' ? 'datepicker-header-info--non-clickable' : ''"
        @click="changeDisplay"
      />
    </div>

    <days
      v-if="selected==='days'"
      :selected-date="currentDate"
      :buffer-date="bufferDate"
      @selectDay="selectDay"
    />

    <months v-if="selected==='months'" :date="bufferDate" @selectMonth="selectMonth"/>

    <years v-if="selected==='years'" :date="bufferDate" @selectYear="selectYear"/>
  </div>
</template>

<script>

import Months from "./Months.vue";
import Years from "./Years.vue";
import Days from "./Days.vue";

export default {
  name: "Datepicker",
  components: {
    Months,
    Years,
    Days
  },
  data: () => ({
    selected: "days",

    currentDate: new Date(),

    bufferDate: new Date(),

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
  computed: {
    displayed: function() {
      if (this.selected === "days")
        return `${
          this.months[this.bufferDate.getMonth()]
        } ${this.bufferDate.getFullYear()}`;

      if (this.selected === "months") return `${this.bufferDate.getFullYear()}`;

      let year = `${this.bufferDate.getFullYear()}`;

      return `${year.slice(0, 3)}0 &#8211; ${year.slice(0, 3)}9`;
    }
  },
  methods: {
    selectYear( year ) {
      this.bufferDate.setFullYear(year);
      this.selected = "months";
    },

    selectMonth( month ) {
      this.bufferDate.setMonth(month);
      this.selected = "days";
    },

    selectDay( date ) {
      this.bufferDate = new Date(date);
      this.currentDate = new Date(date);

      this.$emit("change", this.currentDate);
    },

    changeDisplay() {
      if (this.selected === "years") return;

      if (this.selected === "months") {
        this.selected = "years";
        return;
      }

      this.selected = "months";
    }
  }
};
</script>




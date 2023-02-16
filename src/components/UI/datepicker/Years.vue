<template>
  <div class="datepicker-body datepicker-body--years">
    <div
      v-for="year in years"
      :key="year"
      class="datepicker-year"
      :class="date.getFullYear().toString() === year ? 'datepicker-year--selected' : ''"
      @click="selectYear(year)"
    >{{ year }}</div>
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
  computed: {
    years: function() {
      let res = [];

      for (let i = 0; i < 10; i++) {
        res.push(
          `${this.date
            .getFullYear()
            .toString()
            .slice(0, 3)}${i}`
        );
      }

      return res;
    }
  },
  methods: {
    selectYear(year) {
      this.$emit("selectYear", year);
    }
  }
};
</script>


<template>
  <div
    v-if="show && message"
    class="mt-8 absolute left-0 right-0 mx-auto text-center"
  >
    <span class="bg-blue-600 shadow-lg py-2 px-4 rounded-3xl text-white">{{
      message
    }}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Toast",
  data() {
    return {
      timerId: 0,
    };
  },
  computed: {
    ...mapState("toasts", ["show", "message", "duration"]),
  },
  methods: {
    ...mapActions("toasts", ["reset"]),
    showToast: function () {
      this.timerId = setTimeout(() => {
        this.reset();
      }, this.duration);
    },
  },
  watch: {
    show(showToast) {
      if (showToast) {
        this.showToast();
      }
    },
  },
};
</script>

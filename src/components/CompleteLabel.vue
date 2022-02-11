<template>
  <div style=" max-width:100px; text-align:center">
    <p
      v-if="isComplete"
      style="
        font-size: 12px;
        font-weight: bold;
        margin: 0;
        color: green;
        background-color: #bbf7d0;
        padding: 1px 12px;
        border-radius: 6px;
      "
    >
      COMPLETE
    </p>

    <p
      v-else
      style="
        font-size: 12px;
        font-weight: bold;
        margin: 0;
        color: red;
        background-color: #fecaca;
        padding: 1px 12px;
        border-radius: 6px;
      "
    >
      INCOMPLETE
    </p>
  </div>
</template>

<script>
export default {
  props: {
    isComplete: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

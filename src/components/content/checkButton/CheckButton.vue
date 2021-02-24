<template>
  <div class="check_button" :class="{ checked: isChecked }">
    <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default() {
          return true
        }
      }
    }
  }
</script>

<style scoped>

  .check_button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #aaa;
  }

  .checked {
    border-color: var(--color-tint);
    background-color: var(--color-tint);
 }

  img {
    width: 17px;
  }

</style>

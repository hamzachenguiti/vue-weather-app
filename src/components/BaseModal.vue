<template>
  <Teleport to="#modal-container">
    <Transition name="modal-outer">
      <div
        class="fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-30 h-screen w-full"
        v-show="isModalActive"
      >
        <Transition name="modal-inner">
          <div class="bg-white max-w-screen-md self-start p-6 mt-8 rounded-sm" v-if="isModalActive">
            <slot />
            <button
              class="bg-weather-primary py-2 px-4 mt-8 text-white rounded-sm"
              @click="$emit('close-modal')"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  isModalActive: {
    type: Boolean,
    default: false
  }
});
defineEmits(['close-modal']);

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>

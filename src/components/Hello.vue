<script setup lang="ts"></script>

<template>
  <button type="button" class="text-2xl hover:bg-green-500" @click="$emit("handleClick")">
    VUE - Hello {{ $props.text || 'default' }}
  </button>
</template>

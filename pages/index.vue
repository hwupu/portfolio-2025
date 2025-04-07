<script setup lang="ts">
const { proxy } = useScriptClarity();

// noop in development, ssr
// just works in production, client
function agree() {
  proxy.clarity("consent");
}
</script>
<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <UButton @click="agree">Button</UButton>
</template>

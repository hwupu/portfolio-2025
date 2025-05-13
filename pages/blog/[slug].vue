<script setup>
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

useHead({
  title: () => post.value?.title || "Page Not Found",
});
</script>

<template>
  <BaseHeaderShade variant="static" class="bg-white/75" />
  <BaseContainer padding-y="default">
    <template v-if="post">
      <ContentRenderer
        :value="post"
        class="prose prose-lg prose-a:decoration-amber-600"
      />
    </template>
    <template v-else>
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </template>
  </BaseContainer>
</template>

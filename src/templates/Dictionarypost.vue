<template>
  <Layout>
    <div class="mx-auto my-16 container-inner">
      <h1 class="text-4xl font-bold leading-tight">
        {{ $page.dictionarypost.title }}
      </h1>
      <p>{{ $page.dictionarypost.definition }}</p>
      <div
        v-for="(perspective, index) in $page.dictionarypost.perspectives"
        :key="index"
      >
        <p>
          As a <em>{{ perspective.role }}</em
          >,
          <span class="font-bold">{{ $page.dictionarypost.title }}</span> means
          {{ perspective.meaning }}.
        </p>
      </div>
      <div class="mb-8">
        <g-link to="/dictionary" class="font-bold uppercase"
          >Back to Dictionary</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Dictionarypost ($path: String!) {
  dictionarypost: dictionarypost (path: $path) {
    title
    definition
    perspectives {
      role
      meaning
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.dictionarypost.title,
    };
  },
};
</script>

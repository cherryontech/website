<template>
  <Layout>
    <template v-slot:hero>
      <div class="w-screen py-24 bg-gray-100">
        <div class="grid max-w-screen-lg m-auto md:grid-cols-2 md:gap-8">
          <div>
            <h1 class="font-serif text-5xl font-bold leading-relaxed">
              {{ $page.pagepost.title }}
            </h1>
            <p class="text-3xl">
              {{ $page.pagepost.banner_text }}
            </p>
          </div>
        </div>
      </div>
    </template>
    
    <article class="m-auto mt-16 prose max-w-prose">
      <div v-html="$page.pagepost.content" />
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.pagepost.title,
    }
  },
}
</script>

<page-query>
query getPostData ($path: String!) {
    pagepost: pagepost(path: $path) {
        title
        path
        draft
        banner_text
        content
    }
}

</page-query>

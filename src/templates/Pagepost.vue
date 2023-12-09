<template>
  <Layout>
    <template v-slot:hero>
      <div class="w-screen py-24 bg-gray-100">
        <div class="flex flex-col max-w-screen-lg gap-8 px-4 m-auto md:flex-row">
          <div class="md:w-1/2">
            <h1 class="font-serif text-5xl font-bold leading-relaxed">
              {{ $page.pagepost.title }}
            </h1>
            <p class="text-3xl">
              {{ $page.pagepost.banner_text }}
            </p>
          </div>
          <div class="md:w-1/2">
            <g-image :src="$page.pagepost.banner_image" :alt="$page.pagepost.banner_alt" />
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
        banner_image (width: 800, height: 450, quality: 90, fit:contain)
        banner_alt
        content
    }
}

</page-query>

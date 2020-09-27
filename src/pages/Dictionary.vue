<template>
  <Layout>
    <h1 class="text-3xl">Tech Dictionary</h1>
    <p class="mb-6">
      This is our take on a dictionary/glossary of tech terms. It's a little
      different because we try to provide <em>perspectives</em> on each term.
    </p>
    <div
      v-for="post in $page.dictionaryposts.edges"
      :key="post.id"
      class="border-purple-900 border-t py-2"
    >
      <g-link :to="post.node.path" class="text-copy-primary">{{
        post.node.title
      }}</g-link>
    </div>

    <!-- Pagination -->
    <PaginationDictionaryposts
      v-if="$page.dictionaryposts.pageInfo.totalPages > 1"
      base="/blog"
      :totalPages="$page.dictionaryposts.pageInfo.totalPages"
      :currentPage="$page.dictionaryposts.pageInfo.currentPage"
    />
  </Layout>
</template>

<page-query>
query Dictionaryposts ($page: Int) {
  dictionaryposts: allDictionarypost (sortBy: "title", order: ASC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationDictionaryposts from "@/components/controls/pagination/PaginationDictionaryposts.vue";
export default {
  components: { PaginationDictionaryposts },
  metaInfo: {
    title: "Dictionary",
  },
};
</script>

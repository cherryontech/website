<template>
  <Layout>
    <h1 class="text-3xl">Tech Dictionary</h1>
    <p>
      This is our take on a dictionary/glossary of tech terms. It's a little
      different because we try to provide <em>perspectives</em> on each term.
    </p>
    <h2 class="mt-2 text-xl font-semibold">
      Want to contribute?
    </h2>
    <p class="mb-6">
      Choose a word below that needs a definition or a perspective. Then read
      our
      <a href="https://github.com/cherryontech/website/blob/pit/CONTRIBUTING.md"
        >Contributing HowTo</a
      >
      to get started!
    </p>

    <!-- Print the first page of dictionary entries -->
    <div
      v-for="post in $page.dictionaryposts.edges"
      :key="post.id"
      class="py-2 border-t border-purple-900"
    >
      <g-link :to="post.node.path" class="font-bold">{{
        post.node.title
      }}</g-link>
      <p class="italic">{{ post.node.definition }}</p>
      <div v-for="(perspective, index) in post.node.perspectives" :key="index">
        <p>
          As a <em>{{ perspective.role }}</em
          >, <span v-if="post.node.title">"{{ post.node.title }}"</span> means
          {{ perspective.meaning }}.
        </p>
      </div>
    </div>

    <!-- Pagination -->
    <PaginationDictionaryposts
      v-if="$page.dictionaryposts.pageInfo.totalPages > 1"
      base="/dictionary"
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
        definition
        perspectives {
          role
          meaning
        }
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

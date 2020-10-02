<template>
  <Layout>
    <h1 class="text-3xl">Tech Dictionary</h1>
    <p class="mb-6">
      This is our take on a dictionary/glossary of tech terms. It's a little
      different because we try to provide <em>perspectives</em> on each term.
    </p>

    <!-- Print the first page of dictionary entries -->
    <div
      v-for="post in $page.dictionaryposts.edges"
      :key="post.id"
      class="py-2 border-t border-purple-900"
    >
      <g-link
        v-if="!post.node.definition && !post.node.perspectives.length"
        :to="
          `https://github.com/cherryontech/website/blob/pit/${
            post.node.fileInfo.path
          }`
        "
        class="font-bold"
        >{{ post.node.title }}
        <span class="font-normal"
          >doesn't have any definition or perspectives yet.</span
        ><span class="font-normal underline"> Add yours!</span></g-link
      >
      <g-link v-else :to="post.node.path" class="font-bold">{{
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
        fileInfo {
          path
        }
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

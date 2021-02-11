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
      <a
        class="underline"
        href="https://github.com/cherryontech/website/blob/pit/CONTRIBUTING.md"
        >Contributing HowTo</a
      >
      to get started!
    </p>
    <SearchBar
      v-model="search"
      label="Search the dictionary"
      placeholderText="type a word"
      class="mb-2"
    />
    <DictionaryCard
      v-for="post in filteredTerms"
      :key="post.id"
      :post="post"
      class="mb-4 last:mb-0"
    />
  </Layout>
</template>

<page-query>
query Dictionaryposts {
  dictionaryposts: allDictionarypost {
    totalCount
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
import SearchBar from "@/components/controls/SearchBar.vue";
import DictionaryCard from '@/components/cards/DictionaryCard.vue';

export default {
  components: {
    SearchBar,
    DictionaryCard
  },
  metaInfo: {
    title: "Dictionary",
  },
  data() {
    return {
      search: "",
      entries: [],
    };
  },
  created() {
    this.entries = this.sortEntries(this.$page.dictionaryposts.edges);
  },
  computed: {
    filteredTerms() {
      return this.entries.filter((entry) => {
        return entry.node.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  methods: {
    sortEntries(allentries) {
      // sort by title, a property of the node object
      return allentries.sort(function(a, b) {
        var nameA = a.node.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.node.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1; //nameA comes first
        }
        if (nameA > nameB) {
          return 1; // nameB comes first
        }
        return 0; // names must be equal
      });
    },
  },
};
</script>

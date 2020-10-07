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

    <div
      v-for="post in entries"
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
export default {
  metaInfo: {
    title: "Dictionary",
  },
  data() {
    return {
      entries: [],
    };
  },
  created() {
    this.entries = this.sortEntries(this.$page.dictionaryposts.edges);
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

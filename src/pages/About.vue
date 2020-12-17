<template>
  <Layout>
    <h1>About us</h1>
    <div class="grid md:grid-cols-3 md:gap-8">
      <div v-for="(member, index) in $page.bios.edges" :key="index">
        <div class="w-full border-4 border-pink-600 h-26">
            <g-image 
              v-if="member.node.memberImage"
              :src="member.node.memberImage" 
              :alt="member.node.title" 
              class="object-cover h-full"
              width="300" 
              height="300"
              quality="75">
            </g-image>
        </div>
        {{ member.node.title }}
      </div>
    </div>
  </Layout>
</template>

<page-query>
query 
{
  bios: allBio(
    filter: { 
      draft: { 
        eq: false 
      }
    }, 
    sortBy: "title", 
    order: ASC 
  ){
    edges {
      node {
        title
        path
        content
        memberImage
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
  computed: {
    publishedMembers() {
      return this.$page.squadposts.edges.filter((entry) => {
        return entry.node.draft === false;
      });
    },
  },
};
</script>

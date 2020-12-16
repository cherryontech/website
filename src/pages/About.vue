<template>
  <Layout>
    <h1>About us</h1>
    <div class="grid md:grid-cols-3 md:gap-8">
      <div v-for="(member, index) in $page.squadposts.edges" :key="index">
        {{ member.node.title }}
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Squadposts {
  squadposts: allSquadpost(
    filter: { 
      draft: { 
        eq: false 
      }
    }, 
    sortBy: "title", 
    order: ASC 
  ) {
    totalCount
    edges {
      node {
        draft
        title
        pronouns
        cherryNickname
        memberImage
        contact_links {
          linkedin_url
          medium_name
          dribble_name
          instagram_name
          twitter_name
          github_name
          portfolio_url
        }
        links {
          link_title
          link_description
          link_url
          link_image
          link_role
          link_tags
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

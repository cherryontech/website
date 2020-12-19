<template>
  <Layout>
    <h1>About us</h1>
    <div class="grid max-w-screen-lg m-auto md:grid-cols-3 md:gap-8">
      <div
        v-for="(member, index) in $page.bios.edges"
        :key="index"
        class="flex flex-col justify-between w-full max-w-sm p-6 border rounded border-grey-300"
      >
        <div>
          <g-image
            v-if="member.node.memberImage"
            :src="member.node.memberImage"
            :alt="member.node.title"
            class="object-contain rounded-sm h-60"
            width="300"
            height="300"
            quality="75"
          >
          </g-image>
          <h3 class="mt-10 text-2xl font-bold">{{ member.node.title }}</h3>
          <p class="mt-1 text-xl capitalize">{{ member.node.primary_role }}</p>
          <p class="mb-3">{{ member.node.pronouns }}</p>
          <div v-html="member.node.content" />
          <p class="mt-6 font-bold">
            Tech squad:
            {{
              member.node.squad_name
                ? member.node.squade_name
                : "Cherry on Tech"
            }}
          </p>
        </div>
        <a
          class="ml-auto text-xl font-extrabold"
          v-if="member.node.contact_links.portfolio_url"
          :href="member.node.contact_links.portfolio_url"
          >site</a
        >
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
        pronouns
        primary_role
        content
        memberImage
        contact_links {
          portfolio_url
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
};
</script>

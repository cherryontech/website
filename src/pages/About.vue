<template>
  <Layout>
    <template v-slot:hero>
    <div class="w-screen py-24 bg-gray-100">
      <div class="grid max-w-screen-lg m-auto md:grid-cols-2 md:gap-8">
        <div>
          <h1 class="font-serif text-5xl font-bold leading-relaxed">About us</h1>
          <p class="text-3xl">
            <span class="font-bold">Cherry on Tech</span> is a volunteer run organization whose mission is to support people of marginalized genders who are new into the world of tech. We are dedicated to developing and creating a community that focuses on empowering women while promoting the power of being part of a <span class="font-bold">tech squad</span>.
          </p>
        </div>
      </div>
    </div>
    </template>
    
    <div class="grid max-w-screen-lg m-auto md:grid-cols-3 md:gap-8">
      <article
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
          />
          <g-link :to="member.node.path"
            ><h3 class="mt-10 text-2xl font-bold">
              {{ member.node.title }}
            </h3></g-link
          >
          <p class="mt-1 text-xl capitalize">{{ member.node.primary_role }}</p>
          <p class="mb-3">{{ member.node.pronouns }}</p>
          <p>{{ member.node.short_intro }}</p>
          <p class="mt-6 font-bold">
            Tech squad:
            {{
              member.node.squad_name ? member.node.squad_name : "Cherry on Tech"
            }}
          </p>
        </div>
        <a
          class="ml-auto text-xl font-extrabold"
          v-if="member.node.contact_links.portfolio_url"
          :href="member.node.contact_links.portfolio_url"
          >site</a
        >
      </article>
    </div>
  </Layout>
</template>

<page-query>
query 
{
  bios: allBiopost(
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
        memberImage
        squad_name
        short_intro
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

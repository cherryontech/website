<template>
  <Layout>
    <h1>About us</h1>
    <div class="flex flex-wrap overflow-hidden sm:-mx-2">
      <div v-for="(member, index) in $page.bios.edges" :key="index" class="flex flex-col w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:w-1/3">
        <div class="h-40 border-4 border-pink-600">
            <g-image 
              v-if="member.node.memberImage"
              :src="member.node.memberImage" 
              :alt="member.node.title" 
              class="object-contain h-full m-auto"
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
  }
};
</script>

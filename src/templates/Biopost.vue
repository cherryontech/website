<template>
  <Layout>
    <article>
      <div class="border border-pink-300">
        <g-image
          v-if="$page.biopost.memberImage"
          :src="$page.biopost.memberImage"
          :alt="$page.biopost.title"
          class="object-contain rounded-sm h-60"
          width="300"
          height="300"
          quality="75"
        />
        <p v-if="$page.biopost.contact_links.email">
          {{ $page.biopost.contact_links.email }}
        </p>
        <a
          v-if="$page.biopost.contact_links.portfolio_url"
          :href="$page.biopost.contact_links.portfolio_url"
          >portfolio</a
        >
        <a v-if="$page.biopost.resume" :href="$page.biopost.resume.src"
          >resume</a
        >
      </div>
      <div class="border border-pink-300">
        <h1>{{ $page.biopost.title }}</h1>
        <p class="mt-1 text-xl capitalize">{{ $page.biopost.primary_role }}</p>
        <p class="mb-3">{{ $page.biopost.pronouns }}</p>
        <div v-html="$page.biopost.content"></div>
        <p>My cherry name is: {{ $page.biopost.cherryNickname }}</p>
        <p>I belong to the tech squad: {{ $page.biopost.squad_name }}</p>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.biopost.title,
    };
  },
};
</script>

<page-query>
query getPostData ($path: String!) {
    biopost: biopost(path: $path) {
        title
        path
        pronouns
        primary_role
        memberImage
        resume
        squad_name
        cherryNickname
        content
        contact_links {
          portfolio_url
          email
        }
    }
}

</page-query>

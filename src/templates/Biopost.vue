<template>
  <Layout>
    <article
      class="max-w-screen-lg mx-auto mt-16 md:gap-6 md:grid-cols-3 md:grid"
    >
      <!-- Bio -->
      <div class="flex flex-col p-4 border rounded-sm border-grey-300">
        <g-image
          v-if="$page.biopost.memberImage"
          :src="$page.biopost.memberImage"
          :alt="$page.biopost.title"
          class="object-contain mb-4 border rounded-sm border-grey-300 h-60"
          width="300"
          height="300"
          quality="75"
        />
        <a
          v-if="$page.biopost.contact_links.email"
          :href="`mailto:${$page.biopost.contact_links.email}`"
          class="font-bold underline"
          >Email</a
        >
        <a
          v-if="$page.biopost.contact_links.portfolio_url"
          :href="$page.biopost.contact_links.portfolio_url"
          class="font-bold underline"
          >Portfolio</a
        >
        <a
          class="font-bold underline"
          v-if="$page.biopost.resume"
          :href="$page.biopost.resume.src"
          >Resume</a
        >
        <p class="mt-1">{{ $page.biopost.short_intro }}</p>
      </div>
      <div class="col-span-2 px-6">
        <h1 class="text-5xl font-bold">{{ $page.biopost.title }}</h1>
        <p class="mt-1 text-xl capitalize">{{ $page.biopost.primary_role }}</p>
        <p class="mb-3">{{ $page.biopost.pronouns }}</p>
        <div v-html="$page.biopost.content"></div>
        <p>
          <span class="font-bold">My cherry name is:</span>
          {{ $page.biopost.cherryNickname }}
        </p>
        <p>
          <span class="font-bold">I belong to the tech squad:</span>
          {{ $page.biopost.squad_name }}
        </p>
      </div>

      <!-- Projects -->
      <div class="mt-12 col-span-full">
        <h2 class="text-5xl font-black">Projects</h2>
        Projects here
      </div>
      <div class="mt-12 col-span-full">
        <h2 class="text-5xl font-black">Media</h2>
        Media, blog, etc here
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
        short_intro
        cherryNickname
        content
        contact_links {
          portfolio_url
          email
        }
    }
}

</page-query>

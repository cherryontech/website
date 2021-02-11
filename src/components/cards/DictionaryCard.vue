<template>
  <div class="flex flex-col text-3xl border border-gray-900 md:flex-row">

  <!-- Entry name -->
    <div 
      class="flex flex-col justify-between w-1/2 pt-8 pl-8 pr-16 md:border-r md:border-gray-200"
      :class="post.node.perspectives.length ? 'pb-4' : 'pb-8'"
    >
      <g-link :to="post.node.path" class="text-3xl font-bold">{{
        post.node.title
      }}</g-link>

      <div 
        v-if="post.node.perspectives.length || post.node.definition"
        class="flex justify-between"
      >
        <g-link
          :to="
            `https://github.com/cherryontech/website/blob/pit/src/assets/content/${
              post.node.fileInfo.path
            }`
          "
          class="text-pink-700 underline"
        >
          add your perspective
        </g-link>
        
        <g-link
          :to="
            `https://github.com/cherryontech/website/blob/pit/src/assets/content/${
              post.node.fileInfo.path
            }`
          "
          class="text-pink-700 underline"
          >
            {{ post.node.definition ? 'edit this definition' : 'add a definition' }}
          </g-link>
      </div>
    </div>

  <!-- Entry definition and perspective -->
    <div class="flex flex-col w-1/2">

      <!-- Definition -->
      <div 
        v-if="post.node.definition"
        class="pl-16 pr-8 border-b border-gray-200 py-7"
      >
        <p class="font-bold">Definition</p>
        <p>{{ post.node.definition }}</p>
      </div>
      
      <!-- Perspective -->
      <div 
        v-if="post.node.perspectives.length"
        class="pl-16 pr-8 my-7"
      >
        <p class="font-bold">Perspectives</p>
        <div 
          v-for="(perspective, index) in post.node.perspectives" 
          :key="index"
        >
          <p>
            As a <em>{{ perspective.role }}</em
            >, <span v-if="post.node.title">"{{ post.node.title }}"</span> means
            {{ perspective.meaning }}.
          </p>
        </div>
      </div>

      <!-- If no contribs yet -->
      <div
        v-if="!post.node.perspectives.length && !post.node.definition"
        class="flex justify-between px-16 py-7"
      >
        <g-link
          :to="
            `https://github.com/cherryontech/website/blob/pit/src/assets/content/${
              post.node.fileInfo.path
            }`
          "
          class="text-pink-700 underline"
        >
          add your perspective
        </g-link>
        
        <g-link
          :to="
            `https://github.com/cherryontech/website/blob/pit/src/assets/content/${
              post.node.fileInfo.path
            }`
          "
          class="text-pink-700 underline"
          >
            add a definition
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <li class="flex flex-col border border-gray-900 md:flex-row">
    <!-- Entry name -->
    <div
      class="flex flex-col justify-between p-6 pb-3 md:pb-6 md:w-1/2 md:border-r md:border-gray-200"
    >
      <h3 class="text-xl font-bold">{{ post.node.title }}</h3>

      <div class="mb-auto">
      <!-- If at least a definition or a perspective -->
        <g-link
          v-if="post.node.perspectives.length || post.node.definition"
          :to="
            `https://github.com/cherryontech/website/blob/pit/src/assets/content/${
              post.node.fileInfo.path
            }`
          "
          class="text-pink-700 underline"
        >
          Update this entry
        </g-link>

        <!-- If no contribs yet -->
        <g-link
          v-if="!post.node.perspectives.length && !post.node.definition"
          :to="
            `https://github.com/cherryontech/website/blob/pit/src/assets/content/${
              post.node.fileInfo.path
            }`
          "
          class="text-pink-700 underline"
        >
          Add a definition and perspective
        </g-link>
      </div>
    </div>

    <!-- Entry definition and perspective -->
    <div class="flex flex-col gap-3 p-6 pt-3 md:pt-6 md:w-1/2">
      <!-- Definition -->
      <div v-if="post.node.definition">
        <h4 class="font-bold">Definition</h4>
        <p>{{ post.node.definition }}</p>
      </div>

      <!-- Divider -->
      <div
        v-if="post.node.perspectives.length && post.node.definition"
        class="border-b border-gray-200"
      />

      <!-- Perspective -->
      <div v-if="post.node.perspectives.length">
        <h4 class="font-bold">Perspectives</h4>
        <ul class="flex flex-col gap-2">
          <li
            v-for="(perspective, index) in post.node.perspectives"
            :key="index"
          >
            <p>
              As a <em>{{ perspective.role }}</em
              >,
              <span v-if="post.node.title">"{{ post.node.title }}"</span> means
              {{ perspective.meaning }}.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
// :class="post.node.perspectives.length ? 'pb-4' : 'pb-8'"
</style>

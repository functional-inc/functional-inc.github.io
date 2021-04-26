<template>
  <div>
    <h1>{{ post.fields.title }}</h1>
    <p>作成日時:{{ post.sys.createdAt }}</p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="body" />
  </div>
</template>

<script lang="ts">
import { Entry } from 'contentful'
import Vue from 'vue'
import marked from 'marked'
import DOMPurify from 'dompurify'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default Vue.extend({
  asyncData (context) {
    const routenName = context.route.params.id
    if (routenName) {
      return client.getEntry(routenName).then((post) => {
        return {
          post
        }
      })
    }
  },
  data: () => ({
    post: {} as Entry<any>,
    body: ''
  }),
  mounted () {
    const rawRichTextField = this.post.fields.body
    const renderedHtml = marked(rawRichTextField)
    const renderedHtmlsanitized = DOMPurify.sanitize(renderedHtml)
    this.body = renderedHtmlsanitized
  }
})
</script>

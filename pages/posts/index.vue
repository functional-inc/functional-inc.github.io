<template>
  <div>
    <h1>投稿記事一覧</h1>
    <ul>
      <li v-for="(post,index) in posts" :key="index">
        <router-link :to="'/posts/' + post.sys.id">
          {{ post.fields.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([posts]) => {
      return {
        posts: posts.items
      }
    }).catch(console.error)
  }
}
</script>

<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
  import { useRoute } from 'vue-router'
  // import usePost from "../composables/usePost"
  // import useUser from "../composables/useUser"
  import useResource from "../composables/useResource"

  const route = useRoute()
  // const {post,fetchOne} = usePost()
  // const {user,fetchOne:fetchUser} = useUser()
  const {resourceSingle:post,fetchOne} = useResource("posts")  
  const {resourceSingle:user,fetchOne:fetchUser} = useResource("users")

  async function fetchData(){
    const p = await fetchOne(route.params.id)
    fetchUser(p.userId)
  }
  fetchData()
</script>

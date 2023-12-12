<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
// import usePost from "../composables/usePost"
import useResource from "../composables/useResource";

// const {posts,fetchAll} = usePost()
const {resourcesList:posts,fetchAll} = useResource("posts")
fetchAll()
</script>

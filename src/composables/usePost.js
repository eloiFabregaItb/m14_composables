import {ref} from "vue"
export default function usePost(){

    const posts = ref([])
    const post = ref(null)

    const url = "https://jsonplaceholder.typicode.com/posts"

    async function fetchAll(){
        const response = await fetch(url)
        const data = await response.json()
        posts.value = data
        return data
    }

    async function fetchOne(id){
        const response = await fetch(url +"/"+id)
        const data = await response.json()
        post.value = data
        return data
    }

    return {posts,fetchAll,post,fetchOne}
}
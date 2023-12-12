import {ref} from "vue"
export default function useUser(){

    const user = ref(null)

    const url = "https://jsonplaceholder.typicode.com/users"


    async function fetchOne(id){
        const response = await fetch(url +"/"+id)
        const data = await response.json()
        user.value = data
        return data
    }

    return {user,fetchOne}
}
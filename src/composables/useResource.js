import {ref} from "vue"
export default function useResource(res){

    const resourcesList = ref([])
    const resourceSingle = ref(null)

    const url = `https://jsonplaceholder.typicode.com/${res}`

    async function fetchAll(){
        const response = await fetch(url)
        const data = await response.json()
        resourcesList.value = data
        return data
    }

    async function fetchOne(id){
        const response = await fetch(`${url}/${id}`)
        const data = await response.json()
        resourceSingle.value = data
        return data
    }

    return {resourcesList,fetchAll,resourceSingle,fetchOne}
}
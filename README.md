# 2. Quina funció necessitem per obtenir els POSTS de la JSON placeholder API?

la funcion `fetch()` nativa de js
[Més informació](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)

# 3. Primer afrontarem la lectura de tots els posts. Sabries dir quin tipus de variable necessitem? Necessitem que aquesta sigui reactiva? Per què?

necessitarem un array de posts per enmagatzemar una llista. Per simplificar les coses la farem reactiva. si no volguesim una variable reactiva podriem fer que el `fetchAll()` retornes els posts
```js
const postsFromAPI = await fetchAll()
posts.value = postsFromAPI
```

# 5. Fes cerca per internet i explica que fan async i await dins el codi que veus a dalt d’aquestes línies. Afegeix la teva explicació amb comentaris de codi.

dins de una funció no asincrona no es pot executar codi asincron, una facil solució es crear una funció asincrona a dintre la funció sincrona i executar aquella part del codi com asincron.

```js

function sincron(){
    console.log("primer")
    async function asincron(){
        const foo = await bar()
        console.log("quart")
    }

    console.log("segon")
    asincron()
    console.log("tercer")
}


```
import { writable } from 'svelte/store'

// const material = writable([])

// const add = (item, price) => {
//     material.update(items => {
//         let itemObject = {
//             item,
//             price,
//             id: new Date().getTime()
//         }
//         return [itemObject, ...items]
//     })
// }

function materialF() {
    const { subscribe, set, update } = writable([])

    return {
        subscribe,
        set,
        add: (item, price) => {
            update(items => {
                let itemObject = {
                    item,
                    price,
                    id: new Date().getTime()
                }

                return [itemObject, ...items]
            })
        },

        updateMaterial: (item, price, id) => {
            update(items => {
                items.forEach(i => {
                    if (i.id === id) {
                        i.item = item
                        i.price = price
                    }
                })
                return items
            })
        }



    }
}




export let material = materialF()

if (localStorage.getItem('material')) {
    material.set(JSON.parse(localStorage.getItem('material')))
}
material.subscribe(items => {
    localStorage.setItem('material', JSON.stringify(items))
})

import { writable } from 'svelte/store';

export let preview_store = writable({
    current: 0,
    part: "Living room",
    parts: ["Living room", "Kitchen", "Bathroom", "Bedroom", "Entrance", "Other"],

    title: 0,
    gallery: 0,
    info: 0,

    fullScreen: false,

    photos: [],
    




    toShow: [1, 2, 3, 4, 5, 6],
   shuffle: (array) => {
  return array.sort(() => Math.random() - 0.5)
},


}) ;
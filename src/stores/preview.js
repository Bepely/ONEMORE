import { writable } from 'svelte/store';

export let preview_store = writable({
    current: 0,
    part: "Гостиная",
    parts: ["Гостиная", "Кухня", "Ванная комната", "Спальня", "Входная группа"],

    title: 0,
    gallery: 0,
    info: 0,




    toShow: [1, 2, 3, 4, 5, "visit card"],
   shuffle: (array) => {
  return array.sort(() => Math.random() - 0.5)
},


}) ;
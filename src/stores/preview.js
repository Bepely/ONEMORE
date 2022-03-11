import { writable } from 'svelte/store';

export let preview_store = writable({
    current: 0,
    part: "Гостиная"
}) ;
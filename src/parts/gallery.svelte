<script>
    import { preview_store } from "../stores/preview"
    import { fade } from 'svelte/transition';
    import { onMount } from "svelte"

    import Picker from "./picker.svelte"

    let fullScreenZ = -1;
    let fullScreenSRC;

    let photos = [[],[],[],[],[],[]];
    let photosLoaded = false;

    onMount(async () => {
        for (let i = 0; i < $preview_store.toShow.length; i++) {
            let path = `/pics/${$preview_store.parts[i]}`;

            
                for (let h = 1; h < $preview_store.toShow.length + 1; h++) {
                    let picPath = path + `/${h}.jpg`;
                    const res = await fetch(picPath);
                    photos[i].push( await res.url)
                }
            
        }

        $preview_store.photos = photos;
        photosLoaded = true;
    })



    let toFullScreen = (room, num)=>{
        
        if (fullScreenZ == -1) {
            fullScreenSRC = `./pics/${room}/${num}.jpg`
            fullScreenZ = 1
            
        } else if(fullScreenZ == 1) {
            fullScreenZ = -1;
        };
        $preview_store.fullScreen = !$preview_store.fullScreen;
        
    }


    

</script>

<div id="holder"> 
<Picker />
    <div id="root" transition:fade>   
        <div id="fullScreen" on:click={toFullScreen($preview_store.part)} style="z-index: {fullScreenZ}">
            <img src={fullScreenSRC}  alt="Full Screen chosen img">
        </div>
        {#if photosLoaded}
        {#each $preview_store.toShow as pic}
        <img  id="a" src={$preview_store.photos[$preview_store.gallery][pic-1]} alt="" on:click={toFullScreen($preview_store.part, pic)}>
        {/each}
        {:else}
        PHOTOS LOADING
        {/if}
        
    </div>  
    
</div>

<style>
    #root{
        display: grid;
    }

    #fullScreen{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;

        display: grid;
        place-items: center;
        background: rgba(52, 52, 52, .75);
    }

    #fullScreen > img{
        width: 70%;
        opacity: 1;
    }
   

    #root:nth-child(1){
        grid-area: a;
    }
    #root:nth-child(2){
        grid-area: b;
    }
    #root:nth-child(3){
        grid-area: c;
    }
    #root:nth-child(4){
        grid-area: d;
    }
    #root:nth-child(5){
        grid-area: e;
    }
    

    #root>img{
        width: 100%;
    }
    #root>img:hover{
        opacity: 0.75;
    }

    #root:nth-child(6){
        grid-area: t;
    }

    @media(min-width: 900px){
        #root{
            width: 80vw;
            grid-template-areas: "a b c"
                                 "t d e"
                        
        }
    }
    @media(max-width: 900px){
        #root{
            width: 100vw;
            grid-template-areas: "a"
                                 "b"
                                 "c"
                                 "t"
                                 "d"
                                 "e";
        }
        #fullScreen > img{
        width: 100%;
        opacity: 1;
    }
    }
</style>
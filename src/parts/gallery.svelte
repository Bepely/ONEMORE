<script>
    import { preview_store } from "../stores/preview"

    import Picker from "./picker.svelte"


</script>

<div id="holder"> 
<Picker />
    <div id="root">    
        {#each $preview_store.toShow as pic}
            {#if pic == "visit card"}
            <img id="t" src="./pics/visit_card.png" alt="">
            {:else }
            <img id="a" src="./pics/{$preview_store.part}/{pic}.jpg" alt="">
            {/if}
        {/each}

    </div>  
    
</div>

<style>
    #root{
        display: grid;
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
    }
</style>
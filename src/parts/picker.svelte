<script>
import { preview_store } from "../stores/preview"

import Button from "../components/lr.svelte"





let show = () => { 
        $preview_store.toShow = $preview_store.shuffle($preview_store.toShow)
    };


</script>


<div id="root">
        <h2>Gallery</h2>
        <div id="picker_holder">
            <h4 id="main" on:change={show()}>{$preview_store.part}</h4>
            <div id="leftHolder" > <Button  side="left" pic={$preview_store.gallery} max={$preview_store.parts.length-1} type="gallery" background="black"/></div>
            <div id="rightHolder" ><Button  side="right" pic={$preview_store.gallery} max={$preview_store.parts.length-1} type="gallery" background="black"/></div>
        </div>
</div>


<style>

    #root{
        text-align: center;
        background-color: #343434;
        color: #DDDDDD;
        width: 100%;
        display: grid;
        place-items: center;
        padding: 30px;

        position: sticky;
        top: 0;
    }
    #main{
        grid-area: main;
    }

    #picker_holder{
        display: grid;
        grid-template-areas:"previous main next";

        grid-template-columns: 1fr 3fr 1fr;
        place-items: center;
        
    }

    #leftHolder{
        grid-area: previous;

    }
    #rightHolder{
        grid-area: next;
    }

  

@media(min-width: 900px){
    
   #picker_holder{
       width: 60vw;
   }

}

@media(max-width:900px){

   

}
</style>
<script>
import { preview_store } from "../stores/preview"


let parts = ["Гостиная", "Кухня", "Ванная комната", "Спальня", "Входная группа"]
let current = 0


let next = ()=>{
    if ($preview_store.current >= parts.length-1) {
        $preview_store.current = 1
        $preview_store.part = parts[$preview_store.current]
    } else{
        $preview_store.current++
        $preview_store.part = parts[$preview_store.current]
    }
}
let previous = ()=>{
    if ($preview_store.current <= parts.length-1) {
        $preview_store.current = parts.length-1
        $preview_store.part = parts[$preview_store.current]
    }  else{
        $preview_store.current--
        $preview_store.part = parts[$preview_store.current]
    }
}

</script>


<div id="root">
        <h4>Галерея</h4>
        <div id="picker_holder">
            <h3 id="main">{$preview_store.part}</h3>
            <img id="previous" class="svg" src="./pics/gui/left.svg" alt="" on:click={previous}>
            <img id="next" class="svg" src="./pics/gui/right.svg" alt="" on:click={next}> 
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
#previous{
        grid-area: previous;
    }
    #next{
        grid-area: next;
    }
    #main{
        grid-area: main;
    }

    #picker_holder{
        display: grid;
        grid-template-areas:"previous main main main next";

        place-items: center;
        
    }

  

@media(min-width: 900px){
    
   #picker_holder{
       width: 60vw;
   }

    .svg{
        width: 4vw;
        height: 5vh;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
        background-color: #DDDDDD;
    }
}

@media(max-width:900px){

   
    .svg{
        width: 20vw;
        height: 5vh;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
        background-color: #DDDDDD;
    }

}
</style>
<script>
import {preview_store} from "../stores/preview"

export let side
export let pic
export let max 
export let type 
export let background

let switcher = () =>{

    if(type == "title"){
    
    $preview_store.title = pic
} else if(type =="gallery"){
    
    $preview_store.gallery = pic;
    $preview_store.part = $preview_store.parts[$preview_store.gallery]
}else if(type =="info"){
    
    $preview_store.info = pic
}else{
    
}

}

let next = ()=>{
    if (pic >= max) {
        pic = 0
    } else{
        pic = pic + 1
    }
    switcher();
}
let previous = ()=>{
    if (pic <= 0) {
        pic = max
    }  else{
        pic = pic - 1
    }
    switcher();
}

</script>


<div id="buttonRoot">
    {#if side=="left"}
    <div id="previous_root" class="{background} container" on:click={previous}>
    <img id="previous" class="svg" src="./pics/gui/left.svg" alt="" >
    </div>
    {:else if side=="right"}
    <div id="next_root" class="{background} container" on:click={next}>
    <img id="next" class="svg" src="./pics/gui/right.svg" alt="" >
    </div>
    {/if}
</div>


<style>

    .container{
        border-radius: 10px;
        margin: 5px;
    }
    .black{
        background-color: #fdfdfd;
    }

    @media(min-width:900px){
    .svg{
        width: 4vw;
        height: 4vh;
        margin: 10px;
    }
}
    @media(max-width:900px){
.svg{
        width: 10vw;
        height: 3vh;
        border-radius: 5px;
        margin: 5px 10px;
}
    }
</style>
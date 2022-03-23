<script>
    import {preview_store} from "../stores/preview"

    import Button from "./lr.svelte"


let next = ()=>{
    if ($preview_store.title >= 3) {
        $preview_store.title = 0
    } else{
        $preview_store.title++
    }
}
let previous = ()=>{
    if ($preview_store.title <= 0) {
        $preview_store.title = 3
    }  else{
        $preview_store.title--
    }
}

</script>

<div id="preview">
<img id="main" src="./pics/preview/preview{$preview_store.title+1}.jpg" alt="Фото превью">
 <Button side="left" pic={$preview_store.title} max={3} type="title" />
 <Button side="right" pic={$preview_store.title} max={3} type="title" />
</div>


<style>


    #main{
        grid-area: main;
    }

    #preview{
        display: grid;
        grid-template-areas: "main main"
                             "previous next";

        place-items: center;
    }

  

@media(min-width: 900px){
    #main{
        width: 40vw;
    }
   

}

@media(max-width:900px){

    img{
        width: 100vw;
    }

}
</style>
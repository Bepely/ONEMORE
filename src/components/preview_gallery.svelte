<script>
let pic = 1;


let next = ()=>{
    if (pic >= 3) {
        pic = 1
    } else{
        pic++
    }
}
let previous = ()=>{
    if (pic <= 1) {
        pic = 3
    }  else{
        pic--
    }
}

</script>

<div id="preview">
<img id="main" src="./pics/preview/preview{pic}.jpg" alt="Фото превью">
 <img id="previous" class="svg" src="./pics/gui/left.svg" alt="" on:click={previous}>
 <img id="next" class="svg" src="./pics/gui/right.svg" alt="" on:click={next}> 
</div>


<style>

#previous{
        grid-area: previous;
    }
    #next{
        grid-area: next;
    }
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
   

    .svg{
        width: 4vw;
        height: 5vh;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
    }
}

@media(max-width:900px){

    img{
        width: 100vw;
    }

    .svg{
        width: 20vw;
        height: 5vh;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
    }

}
</style>
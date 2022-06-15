<script>


</script>

<div id="preview">
<img id="main" src="./pics/preview/portrait.jpg" alt="Фото портрет ч.б.">
</div>


<style>


    #main{
        display: block;
    }

    #preview{
        display: grid;
        place-items: center;
    }

  

@media(min-width: 900px){
    #main{
        width: 75%;
    }
   

}

@media(max-width:900px){

    img{
        width: 75vw;
    }

}
</style>
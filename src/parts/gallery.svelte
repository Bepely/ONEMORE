<script>
    import { preview_store } from "../stores/preview"



</script>

<div id="root">        
    <img id="a" src="./pics/{$preview_store.part}/1.jpg" alt="">
    <img id="b" src="./pics/{$preview_store.part}/2.jpg" alt="">
    <img id="c" src="./pics/{$preview_store.part}/3.jpg" alt="">
    <img id="d" src="./pics/{$preview_store.part}/4.jpg" alt="">
    <img id="t" src="./pics/visit_card.png" alt="">
    <img id="e" src="./pics/{$preview_store.part}/5.jpg" alt="">
    
    
</div>

<style>
    #root{
        display: grid;
    }

   

    #a{
        grid-area: a;
    }
    #b{
        grid-area: b;
    }
    #c{
        grid-area: c;
    }
    #d{
        grid-area: d;
    }
    #e{
        grid-area: e;
    }
    

    #root>img{
        width: 100%;
    }

    #t{
        grid-area: t;
    }

    @media(min-width: 900px){
        #root{
            width: 80vw;
            grid-template-areas: "a b b"
                                 "a b b"
                                 "c b b"
                                 "c b b"
                                 "t d d"
                                 "t d d"
                                 "e d d"
                                 "e d d"
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
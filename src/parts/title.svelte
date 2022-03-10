<script>
import Preview from "../components/preview_gallery.svelte"

</script>


<div id="root">
    <div id="logo_holder" class="svg_part img_part part"> 
        <img src="./pics/logo.svg" alt="Логотип Гогин" id="logo">
    </div>
    
    <div id="text_holder" class="text_part part">
        
        
    </div>

    <div id="header_holder" class="text_part part">
        <h1>Фотограф жилой и коммерческой недвижимости в Москве</h1>
    </div>

    <div id="paragraph_holder" class="text_part part">
        <p>Покупая профессиональные фотографии для ваших объектов недвижимости - вы обгоняете 80% конкурентов.</p>
    </div>

    <div id="preview_holder" class="component_part img_part part"> 
        <Preview />
    </div>

    <div id="contacts_holder" class="text_part part">
        <h5>+7 (903) 017-92-29 </h5>
        <h5>gogin.photo@gmail.com</h5>
    </div>
</div>




<style>

#root{
        display: grid;
    }

    
    
#logo_holder{
    grid-area: logo;
    display: grid;
    place-items: center;
    padding: 5vw;
}
#header_holder{
    grid-area: header;
}
#paragraph_holder{
    grid-area: paragraph;
}
#preview_holder{
    grid-area: preview;
}
#contacts_holder{
    grid-area: contacts;
}

.part{
    display: grid;
    place-items: center;
    
}

.text_part{
    text-align: center;
}

    @media(min-width: 900px){
    
        #root{
            grid-template-areas: "logo preview preview"
                                 "header preview preview"
                                 "paragraph preview preview"
                                 ". contacts .";
            grid-template-columns: 1fr 1fr 1fr;
            width: 60vw;
            height: 80vh;

            margin: 10vh 10vw;
        }

        #logo{
            width: 5vw;
        }

        .part{
            margin: 30px;
        }
        
        
    }
    @media(max-width:900px){
        #root{
            grid-template-areas: "logo header header header"
                                 "preview preview preview preview"
                                 "preview preview preview preview"
                                 "preview preview preview preview"
                                 "paragraph paragraph paragraph paragraph"
                                 "contacts contacts contacts contacts";

            width: 100vw;
            height: 100vh;
        }
        #logo{
            width: 15vw;
            place-items: center;
        }
    }
</style>

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
        <h1>Nikolay Gogin</h1>
        <h2>Real Estate Photographer</h2>
    </div>

    <div id="paragraph_holder" class="text_part part">
            <h4>Making your property desirable</h4>
            <p>Professional photos of your real estate objects makes it more liquid asset.</p>
    </div>

    <div id="preview_holder" class="component_part img_part part"> 
        <Preview />
    </div>

    <div id="contacts_holder" class="text_part part">
        <h5>+7 (991) 1234-134 </h5>
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
    padding: 10px;
    margin: 10px;
}
#header_holder{
    grid-area: header;
    padding: 10px;
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
            grid-template-columns: 3fr 5fr 3fr;
            width: 60vw;
            height: 80vh;

            margin: 10vh 6vw;
        }

        #logo{
            width: 6vw;
            padding: 0;
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

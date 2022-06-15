<script>
import {preview_store} from "../stores/preview"

import Button from "../components/lr.svelte"

const cardHeads = ["About",
                   "Why me?", 
                   "My gear",
                   "What profits?", 
                   "Before photoshoot",
];
const cardText = [
        "My name is Nikolay Gogin. I am a professional photographer specializing on real estate objects for rent and for sele. I have more than 3 years experience with a real estate photography. My portfolio contents flats, countryhouses, townhouses, offices and commertial premises.",
        "My experience includes close ties with real estate agencies, so understanding of their needs as well. Working with me secure, fast and profitable. You will get your photos done up to 48 hours since the photoshoot, including your edits in post-production.  ",
        "Camera: Canon m50 | Lens: Tokina 11-16 mm | SpeedBooster: Viltrox ef-eos M2 0.71x | Tripod: Manfrotto 290xtra | SpeedLight: Canon 580EXII",
        "Professional photos provide superior advertisment over competitors' non-professional ads. Hiring me - you are getting over 80% competitors on the real estate market. It converts to more views, more calls and more deals closed.",
        "Recomendations are simple: clean space, daytime photoshoot, absence of personal and religious items. You can reach me via e-mail to schedulee a photoshoot."]
</script>


    
        <div id="cards_root">
            
            
                <div id="nav_root">
                    <Button side="left" pic={$preview_store.info} max={cardHeads.length -1} type="info" />
                    <Button side="right" pic={$preview_store.info} max={cardHeads.length -1} type="info" />
                </div>
                
                <div id="header" class="text">
                    <h3>{cardHeads[$preview_store.info]}</h3>
                </div>

                <div id="mainText" class="text">
                    <p>{cardText[$preview_store.info]}</p>
                </div>

            </div>
        

    



<style>

p{
    text-align: center;
}
 #cards_root{
     display: grid;
    place-items: center;

    grid-template-areas: "title"
                         "header"
                         "text"
                         "buttons";

    
    border-radius: 10px;

    min-height: 50vh;
    margin: 5vh 5vw;

    

 }

 #nav_root{
     grid-area: buttons;
    }
    #header{
    grid-area: header;
    }
    #mainText{
        grid-area: text;
        width: 80%;
    }
    

    #nav_root{
        display: grid;
        place-items: center;

        grid-template-columns: 1fr 1fr;

        width: 100%;
    }


 @media(min-width: 900px){

        #cards_root{
            width: 80vw;
            height: 80%;
            
        

            
        }
        #mainText{
            width: 60%;
        }
 }

</style>
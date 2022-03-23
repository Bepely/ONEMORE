<script>
import {preview_store} from "../stores/preview"

import Button from "../components/lr.svelte"

const cardHeads = ["Стоимость",
                   "Назначение съемки", 
                   "Порядок и способ оплаты", 
                   "Процесс съемок и обработки",
                   "Подготовительные рекомендации",
                   "Дополнительная информация"
];
const cardText = [
        "Стоимость съемки оставляет 5000₽. Стоимость включает в себя консультацию, выезд на объект, съемка на профессиональное оборудование и обработка отснятого материала. Вы получаете 15 горизонтальных и 5 вертикальных фото на выбор.",
        "Для консультации, выбора даты и назначения съемки - свяжитесь со мной через Telegram, WhatsApp, email, либо по телефону с 10:00 до 19:00. ",
        "Оплата состоит из двух этапов. Предоплата 2000₽ вносится при назначении даты съемки и постоплата 3000₽. Оплата принимается банковским переводом. При необходимости - возможно заключение договора подряда. ",
        "По мере готовности, заказчику демонстрируются все готовые фотографии, сжатые и защищенные водяным знаком. Заказчик выбирает 15 горизонтальных и 5 вертикальных фото, оплачивает работу и получает набор выбранных и оплаченных фотографий.",
        "Назначив дату съемки, рекомендуется провести минимальный Хоумстейджинг помещения, убрав все личные вещи, фотографии, предметы личной гигиены, одежду,  столовые приборы и т.д..",
        "В случае повторного выезда по инициативе Заказчика, требуется повторная предоплата. В случае повторного выезда по инициативе Исполнителя, предоплата сохраняется, а из финальной стоимости вычитается размер предоплаты. Предоставленные фотографии являются завершенным продуктом. Внесение правок стоит 1000₽ и выполняются 1 рабочие сутки."
]
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
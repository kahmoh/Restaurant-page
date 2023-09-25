import ChickenImage from '../src/gallery_nandos_new_cutlery_2.jpg'
import {renderHeader,content} from "./index";



const homePage = {
    renderHomePage: function () {
        content.appendChild(renderHeader());
        content.appendChild(this.renderChickenImage())
    },
    renderChickenImage: function () {
        const image = new Image()
        image.src = ChickenImage;
        return image;
    },
}

export {homePage,renderHeader}
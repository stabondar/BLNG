import HeroSlider from "./HeroSlider";
import Draggable from "./Draggable";
import Features from "./Features";
import Phone from "./Phone";
import Galery from "./Galery";
import Phrase from "./Phrase";
import SvgBg from "./SvgBg";

export default class index
{
    constructor()
    {
        this.heroSlider = new HeroSlider()
        this.draggable = new Draggable()
        this.features = new Features()
        this.phone = new Phone()
        this.galery = new Galery()
        this.phrase = new Phrase()
        this.svgBg = new SvgBg()
    }
}
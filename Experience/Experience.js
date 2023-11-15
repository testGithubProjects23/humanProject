import * as THREE from 'three';

import Sizes from './Utils/Sizes';
import Time from './Utils/Time';
import Resources from './Utils/Resources';
import assets from './Utils/Assets';

import Camera from './Camera';
import Renderer from './Renderer';

import World from './World/World';
import Assets from './Utils/Assets';


export default class Experience {
    static instance //static variable for singleton
    constructor(canvas) {
        if(Experience.instance) {
            return Experience.instance;  //check if singleton exists
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();   //import everything from Sizes.js
        this.time = new Time();   //import everything from Time.js
        this.camera = new Camera();   //import everything from Camera.js
        this.renderer = new Renderer();   //import everything from Renderer.js
        this.resources = new Resources(assets);
        this.world = new World();

        this.time.on("update", () => {  //on "update" event from Time.js update all other classes
            this.update();
        });

        this.sizes.on("resize", () => {  //on "resize" event from Sizes.js update all other classes
            this.resize();
        });
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.renderer.update();
    }

}
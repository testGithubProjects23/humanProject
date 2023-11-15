import * as THREE from 'three';

import Experience from "../Experience";

export default class Human {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.human = this.resources.items.human;   //human asset
        this.actualHuman = this.human.scene;   //only scene from human object
        console.log(this.actualHuman);

        this.setModel();
        
        


        

    }

    setModel() {
        this.scene.add(this.actualHuman);
        this.actualHuman.scale.set(0.01, 0.01, 0.01);
        this.actualHuman.position.set(0,-1,0);
        
    }

    
    resize() {

    }

    update() {

    }
    
}


import { Component } from '@angular/core';
import { HealthService } from './health.service';

@Component({
  selector: 'healthcomponent',  //<healthcomponent>
  template: `<h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let thing of things">{{ thing }}</li>
            </ul>
            `
})
export class HealthComponent{
    title = "Health component yeah";
    things;
    getTitle() {
        return this.title;
    }
    constructor(service: HealthService){
        this.things = service.getServices();
    }


    //
}


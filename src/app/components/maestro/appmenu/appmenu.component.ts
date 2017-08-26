import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-appmenu',
    templateUrl: './appmenu.component.html',
    styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

    itemsMenu = [
        {
            textOpcion: 'Inicio',
            url: '/maestro/inicio',
        },
        {
            textOpcion: 'Componenetes',
            url: '#',
            children: [
                {
                    textOpcion: 'Uno',
                    url: '/maestro/uno',
                },
                {
                    textOpcion: 'Dos',
                    url: '/maestro/dos',
                },
                {
                    textOpcion: 'Tres',
                    url: '/maestro/tres',
                    children: [
                        {
                            textOpcion: 'Tres 1',
                            url: '/maestro/tres',
                        },
                        {
                            textOpcion: 'Tres 2',
                            url: '/maestro/tres',
                            children: [
                                {
                                    textOpcion: 'Tres 2-1',
                                    url: '/maestro/tres',
                                },
                                {
                                    textOpcion: 'Tres 2-2',
                                    url: '/maestro/tres',
                                },
                            ]
                        },
                    ]
                }
            ]
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {UserService} from '../../services/user.service'
import {GLOBAL} from "../../services/global";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-maestro',
    templateUrl: './maestro.component.html',
    providers: [UserService]

})

export class MaestroComponent implements OnInit {
    public identity;
    public token;
    public url: string;
    public urlImagenUser: string;

    constructor(private _route: ActivatedRoute,
                private _userService: UserService,
                private _router: Router) {
        this.url = GLOBAL.url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken()
        this.urlImagenUser = GLOBAL.url + 'user/get-image/' + this.identity.image;
    }

    ngOnInit() {
        //this.habilitarMenu();
    }

    public logout() {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
    }

    public habilitarMenu(){
        $('.items a').on('click', function() {
            var $this = $(this),
                $bc = $('<div class="item"></div>');

            $this.parents('li').each(function(n, li) {
                var $a = $(li).children('a').clone();
                $bc.prepend(' / ', $a);
            });
            $('.breadcrumb').html( $bc.prepend('<a href="#home">Home</a>') );
            return false;
        })
    }

}

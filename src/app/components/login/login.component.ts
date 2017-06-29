import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user'
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service'
import { ToastrService } from 'ngx-toastr';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [UserService]
})

export class LoginComponent implements OnInit {
    public user: User;
    public identity;
    public token;

    constructor(
        private _userService:UserService,
        private router:Router,
        private toastrService: ToastrService
    ) {
        this.user = new User('','','','','','');
    }

    ngOnInit() {
        this.iniciarComponente();
        this.identity = '';
        this.token = '';
        this.user.email = '';
        this.user.password = '';
    }

    public onSubmit(){
        this._userService.signup(this.user).subscribe(
            response => {
                let identity = response.user;
                this.identity = identity;
                if(!this.identity._id){
                    this.toastrService.info('No esta correctamente logueado.', 'Inicio de sesión');
                } else {
                    // Creamos elemento en el localstorage
                    localStorage.setItem('identity', JSON.stringify(identity))

                    // Conseguimos el token para enviarlo en cualquier peticion
                    this._userService.signup(this.user, 'true').subscribe(
                        response => {
                            let token = response.token;
                            this.token = token;
                            if(this.token.length <= 0){
                                this.toastrService.info('No se a generado el token.', 'Inicio de sesión');
                            } else {
                                // Creamos elemento en el localstorage
                                localStorage.setItem('token', token);
                                this.router.navigate(['maestro/inicio']);
                            }
                        },
                        error => {
                            var errorMessage = <any>error;
                            if(errorMessage != null){
                                var body = JSON.parse(error._body);
                                this.toastrService.info(body.message, 'Inicio de sesión');
                                console.log(body.message);
                            }
                        }
                    )
                }
            },
            error => {
                var errorMessage = <any>error;
                if(errorMessage != null){
                    var body = JSON.parse(error._body);
                    this.toastrService.info(body.message, 'Inicio de sesión');
                    console.log(body.message);
                }
            }
        )
    }

    public iniciarComponente() {
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    }
}

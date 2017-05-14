import { IGuest, IRegisterEntry } from "app";
import { AuthService } from "./auth.service";

export class GuestsService {

    /* @ngInject */
    constructor(
        private $http: ng.IHttpService,
        private Auth : AuthService
    ){

    }

    register(register : IRegisterEntry){
        return this.$http.post('api/register', register);
    }

    getGuestList() : ng.IPromise<IGuest[]>{
        return this.$http.get('api/guests', {
      headers: {
        token: this.Auth.getToken()
      }
    });
    }
}
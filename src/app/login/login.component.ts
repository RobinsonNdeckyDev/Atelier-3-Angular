import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    // nos atributs
    email = "";
    password = "";
    prenom = "";
    nom = "";
    afficher = true;


    // Nos méthodes


    verifyformLogin(){
      if (this.email == "" || this.password == "") {
          this.afficherMessage("error", "Attention", "Merci de renseigner tous les champs svp");
      }else if(this.password.length < 8){
          this.afficherMessage("error", "Attention", "Le mot de passe doit etre supérieur ou égal à huit caractères");
      }else{
          this.afficherMessage("success", "Bravo", "Vous étes connecté avec succés");
      }
    }

    verifyFormRegister(){
      if (this.prenom == "" || this.nom == "" || this.email == "" || this.password == "") {
          this.afficherMessage("error", "Attention", "Merci de renseigner tous les champs svp");
          this.form();
      }else if(this.password.length <= 8){
          this.afficherMessage("error", "Attention", "Le mot de passe doit etre supérieur à huit caractères");
          this.form();
      }else {
          this.afficherMessage("success", "Bravo", "Bienvenue à vous!");
          this.form1();
          this.form();
      }

    }

    afficherMessage(icon:any,title:any,message:any){
        Swal.fire({
        icon: icon,
        title: title,
        text: message,
      })
    }

    form(){
      this.afficher = !this.afficher;
      // this.email = "";
      // this.password = "";
      // this.prenom = "";
      // this.nom = "";
    }

    form1(){
      this.afficher = !this.afficher;
      this.email = "";
      this.password = "";
      this.prenom = "";
      this.nom = "";
    }
}

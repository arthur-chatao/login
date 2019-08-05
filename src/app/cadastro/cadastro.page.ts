import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  usuario: Usuario = new Usuario();

    constructor(private afAuth: AngularFireAuth, private fire: AngularFireDatabase, private rota: Router, ) { }

    salvar() {
      this.fire.list('usuario').push(this.usuario.nome );
      this.fire.list('usuario').push(this.usuario.telefone);
      this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha);
      this.usuario = new Usuario();
    }
  ngOnInit() {
  }

}

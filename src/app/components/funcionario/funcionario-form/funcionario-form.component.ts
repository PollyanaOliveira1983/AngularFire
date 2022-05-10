import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionario: FormGroup = this.fb.group({
    nome:['',[Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    cargo:['',[Validators.required]],
    salario:[''],
    foto:['']
  })

  constructor(
    private fb: FormBuilder,
    private funcService: FuncionarioService
  ) { }

  ngOnInit(): void {
  }

  addFuncionario(){
    const FUNCIONARIO: Funcionario = {
      nome: this.funcionario.value.nome,
      email: this.funcionario.value.email,
      cargo: this.funcionario.value.cargo,
      salario: this.funcionario.value.salario,
      foto: this.funcionario.value.foto
    }
    this.funcService.addFuncionario(FUNCIONARIO).then(() =>{
      console.log("Funcionario cadastrado")
      this.funcionario.reset()
    }, error => {
      console.log("Error ao cadastrar o funcionario")
    }) 
  }
}

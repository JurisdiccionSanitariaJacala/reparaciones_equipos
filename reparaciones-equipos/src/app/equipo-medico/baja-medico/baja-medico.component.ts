import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-baja-medico',
  templateUrl: './baja-medico.component.html',
  styleUrls: ['./baja-medico.component.css']
})
export class BajaMedicoComponent implements OnInit {
  public valorFormulario : any = {};
  public formBajaMedico : FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.InitForm();
  }

  ngOnInit(): void {
  }

  InitForm(){
    this.formBajaMedico = this.formBuilder.group({
      claveCAMBSEMBaja: new FormControl(null, []),
      numInvEquipoMBaja: new FormControl(null, []),
      marcaEquipoMBaja: new FormControl(null, []),
      modeloEquipoMBaja: new FormControl(null, []),
      motivoBajaEM: new FormControl(null, [Validators.required])
    });

    this.formBajaMedico.get('claveCAMBSEMBaja')?.valueChanges.subscribe(x=>{console.log(x);
    });


  }

  ShowFormValue(){
    console.log("Valor formulario: ", this.formBajaMedico.getRawValue());
  }


  /*this.formBajaMedico.valueChanges.subscribe((d:any)=>{
    
  }
  )*/
}

import { Component, OnInit } from '@angular/core';
import { EquipoMedicoService } from './equipo-medico.service';
import { EquiposMedicos } from './equipoMedico'; //IMPORTA ARCHIVO DE CLASE (.TS)

@Component({
  selector: 'app-equipo-medico',
  templateUrl: './equipo-medico.component.html',
  styleUrls: ['./equipo-medico.component.css']
})
export class EquipoMedicoComponent implements OnInit {
  equiposMedicos: EquiposMedicos[] = [];
  constructor(private EquipoMedicoService: EquipoMedicoService) { }

  ngOnInit(): void {
    this.equiposMedicos = this.EquipoMedicoService.getEquipoMedico();
  }

}

import { Component, OnInit } from '@angular/core';
import {EquipoMedicoService} from './equipo-medico.service';
import {EquipoMedico} from './equipoMedico';

@Component({
  selector: 'app-equipo-medico',
  templateUrl: './equipo-medico.component.html',
  styleUrls: ['./equipo-medico.component.css']
})
export class EquipoMedicoComponent implements OnInit {
  equipoMedico: EquipoMedico[] = [];
  constructor(private EquipoMedicoService: EquipoMedicoService) { }

  ngOnInit(): void {
    this.equipoMedico = this.EquipoMedicoService.getEquipoMedico();
  }

}

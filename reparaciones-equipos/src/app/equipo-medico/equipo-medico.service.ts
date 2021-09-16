import { Injectable } from '@angular/core';
import {EquiposMedicos} from './equipoMedico';
import {EQUIPOSMEDICOS} from './EquiposMedicos.json';

@Injectable()
export class EquipoMedicoService {

  constructor() { }
  getEquipoMedico(): EquiposMedicos[]{
    return EQUIPOSMEDICOS;
  }
}

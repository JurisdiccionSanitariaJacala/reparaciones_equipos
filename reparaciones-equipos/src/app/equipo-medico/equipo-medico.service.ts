import { Injectable } from '@angular/core';
import {EquipoMedico} from './equipoMedico';
import {EQUIPOSMEDICOS} from './EquiposMedicos.json';

@Injectable()
export class EquipoMedicoService {

  constructor() { }
  getEquipoMedico(): EquipoMedico[]{
    return EQUIPOSMEDICOS;
  }
}

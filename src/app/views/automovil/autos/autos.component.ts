import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RowComponent, ColComponent, CardComponent, CardBodyComponent, CardHeaderComponent, FormControlDirective, FormDirective, FormLabelDirective, ButtonDirective, TextColorDirective, FormSelectDirective, TableActiveDirective, TableColorDirective, TableDirective } from '@coreui/angular';
import { AutosModel} from '../models/autos.model';
import  { AutosService } from '../services/autos.service';
@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, FormControlDirective,
    CardBodyComponent, ReactiveFormsModule, FormSelectDirective,FormsModule, FormDirective,
     FormLabelDirective,TableDirective, TableColorDirective, TableActiveDirective, 
     FormControlDirective,ButtonDirective,TextColorDirective,NgStyle],
    templateUrl: './autos.component.html',
  styleUrl: './autos.component.scss'
  })
export class AutosComponent{
  listadeautos : AutosModel[] = [];
  autosModel : AutosModel = new AutosModel();


  constructor(private autosService: AutosService) {
   
    }
postcrear(){
 console.log(this.autosModel);
this.autosService.agregar(this.autosModel).subscribe({
  next : (respuesta) => {

    console.log(respuesta);
  
  },
  error: (error) =>{

    console.log(error);
  }
})
}

eliminar(auto: AutosModel){
  console.log("itema para eliminar");
  this.autosService.eliminar(auto._id).subscribe({
    next : (respuesta) => {
        console.log("Se elimino exitosamente",respuesta);
    },
    error: (error) => {
      console.log(error);
    }
  })
}


editar(autos: AutosModel){
  this.autosService.editar(autos).subscribe({
  next: (respuesta) => {
    console.log("Se editó exitosamente", respuesta);
    // this.getRecetas();
          this.autosModel = new AutosModel();
      },
      error: (error) => {
        console.log(error);
    
      }
  });
}
}
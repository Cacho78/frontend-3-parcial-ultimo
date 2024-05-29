import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutosModel } from '../models/autos.model';
import {Observable} from "rxjs";

@Injectable ({
    providedIn : 'root'
})

export class AutosService {
    //url de la API (backend)   
    private API_URL = 'http://localhost:5000/bienvenida';
    constructor(private http: HttpClient){

    }
    agregar (autos:AutosModel): Observable<AutosModel> {
        return this.http.post<AutosModel>(`${this.API_URL}/crear`, autos);
    
    }


    eliminar (id : string): Observable<AutosModel> {
        return this.http.delete<AutosModel>(`${this.API_URL}/eliminarTodos`);
    }

    editar(auto: AutosModel) : Observable<AutosModel> {
        return this.http.put<AutosModel>(`${this.API_URL}/editar/${auto._id}`, auto);
    }
}
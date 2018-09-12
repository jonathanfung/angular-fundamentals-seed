import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { Passenger } from "./models/passenger.interface";

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private httpClient: HttpClient) {}

    getPassengers(): Observable<Passenger[]> {
        return this.httpClient
            .get<Passenger[]>(PASSENGER_API)
            .pipe(catchError(e => throwError(e)));
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.httpClient
            .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, { headers });
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.httpClient
            .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
    }
}
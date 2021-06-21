
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface GetCarsInput {
    price?: string;
    transmission?: string;
    drive?: string;
    engine?: string;
}

export interface AddReservInput {
    id_user: string;
    id_car: string;
    dates: string;
}

export interface Car {
    id: string;
    brand: string;
    model: string;
    yearIssue: number;
    governmentNumber: string;
    vin: string;
    color: string;
    drive: string;
    Enginefuel: string;
    Enginevolume: string;
    Enginepower: string;
    transmission: string;
    mileage: string;
    VPSerialAndNumber: string;
    VRCSerialAndNumber: string;
    PriceOne: string;
    PriceTwo: string;
    PriceThree: string;
    Osago: string;
    Kasko: string;
    Options: Car[];
    AdditionalServices: Car[];
    photosAuto: Car[];
    photosDoc: Car[];
}

export interface Reserv {
    id: string;
    id_user: string;
    id_car: string;
    dates: string;
}

export interface IQuery {
    Car(getCarsInput: GetCarsInput): Car[] | Promise<Car[]>;
    getReserv(id_user: string): Reserv[] | Promise<Reserv[]>;
}

export interface IMutation {
    AddReserv(addReservInput: AddReservInput): Reserv | Promise<Reserv>;
}

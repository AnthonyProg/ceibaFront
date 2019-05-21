import { Vehicle } from './vehicle';

export class Registration{
    domainId: bigint;
    domainVehiclePlate : string;
    domainVehicleType: Vehicle;
    checkIn : string;
    checkOut : string;
}
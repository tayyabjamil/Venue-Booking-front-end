import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyAuthService } from './myAuth.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
authService: any;

constructor(
  private http: HttpClient,
  private myauthService: MyAuthService
   ) { }
httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
    accept: ' application/json'
  })
};
login(user) {
  return this.http.post(
    'http://localhost:3001/userAccount/login',
    {
      email: user.email,
      password: user.password
    },
    this.httpHeaders
  );
}
createAccount(newUser) {

  return this.http.post(
    'http://localhost:3001/userAccount/signUp',
    {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    },
    this.httpHeaders
  );
}
getUserData() {
  return this.http.get('http://localhost:3001/registerHall/' + this.myauthService.getID(), this.httpHeaders);

}
getUserCars() {
  return this.http.get('http://localhost:3001/registerCar/' + this.myauthService.getID(), this.httpHeaders);

}

getuserVehicles(){
  return this.http.get('http://localhost:3001/registerCar/' + this.myauthService.getID(), this.httpHeaders);

}
registerHall(hallData) {
  return this.http.post(
    'http://localhost:3001/registerHall/',       {

      userAccountId: hallData.value.userId,
      name: hallData.value.name,
      email: hallData.value.email,
      location: hallData.value.location,
      startBookingAmount: hallData.value.startBookingAmount,
      about: hallData.value.about,
      contact: hallData.value.contact,
      services: hallData.value.services,
      mainImage: hallData.value.mainImage,
      multipleImages: hallData.value.multipleImages,
      vedio: hallData.value.vedio,
    },
    this.httpHeaders
  );
}
registerCar(CarData) {
  return this.http.post(
    'http://localhost:3001/registerCar/',       {

      userAccountId: CarData.value.userId,
      name: CarData.value.name,
      location: CarData.value.location,
      amount: CarData.value.amount,
      about: CarData.value.about,
      contact: CarData.value.contact,
      date:CarData.value.date,
      multipleImages: CarData.value.multipleImages,
      mainImage: CarData.value.mainImage,
    },
    this.httpHeaders
  );
}
createRequestCar(requestData) {
  return this.http.post(
    'http://localhost:3001/bookingCar',
    {
        name: requestData.value.name,
        email: requestData.value.email,


        phone: requestData.value.phone,
        registerCarId: requestData.value.registerCarId,
        city: requestData.value.city,
        date: requestData.value.date
    },
    this.httpHeaders
  );
}
createRequest(requestData) {
  return this.http.post(
    'http://localhost:3001/booking',
    {
        name: requestData.value.name,
        email: requestData.value.email,
        guests: requestData.value.guests,
        eventType: requestData.value.eventType,
        phone: requestData.value.phone,
        registerHallId: requestData.value.registerHallId,
        city: requestData.value.city,
        date:requestData.value.date
    },
    this.httpHeaders
  );
}
getRequests(id) {
  return this.http.get('http://localhost:3001/booking/' + id,   this.httpHeaders);
}
getRequestsCar(id) {
  return this.http.get('http://localhost:3001/bookingCar/' + id,   this.httpHeaders);
}
getAllVenues() {
  return this.http.get('http://localhost:3001/registerHall/', this.httpHeaders);
}
getAllCars() {
  return this.http.get('http://localhost:3001/registerCar/', this.httpHeaders);
}
getHallDetails(id) {
  return this.http.get('http://localhost:3001/registerHall/hallDetails/' + id,   this.httpHeaders);
}

getCarDetails(id) {
  return this.http.get('http://localhost:3001/registerCar/carDetails/' + id,   this.httpHeaders);
}
}

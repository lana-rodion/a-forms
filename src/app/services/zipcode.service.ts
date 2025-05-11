import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZipcodeService {
  private validZipCodes: string[] = ['00001', '00002', '00003', '00004'];
  fakeHttpRequest(value: string): Observable<boolean> {
    return new Observable((observer) => {
      setTimeout(() => {
        const isValid = this.validZipCodes.includes(value);
        observer.next(isValid);
        observer.complete();
      }, 2000); // Simulate a 2-second delay
    });
  }
  validateZipCode(value: string): Observable<boolean> {
    return this.fakeHttpRequest(value);
  }
  // This method is just for demonstration purposes
  // In a real application, you would use an HTTP client to make a request
  // to a backend service to validate the zip code
  // For example:
  // validateZipCode(value: string): Observable<boolean> {
  //   return this.httpClient.get<boolean>(`/api/validate-zipcode/${value}`);
  // }
}

import { User } from './user';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
 

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 1, name: "Kamo", surname: "Tshehla", email: "kamo@gmail"},
      {id: 2, name: "Nicki", surname: "Mmoyane", email: "nicki12@gmail"},
      {id: 3, name: "Maria", surname: "Tshehla", email: "MM@gmail"}
      
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
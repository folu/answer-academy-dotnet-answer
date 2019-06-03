import { computedFrom, factory } from 'aurelia-framework';
import { IPerson } from '../interfaces/iperson';
import { IColour } from '../interfaces/icolour';

export class Person implements IPerson {

  constructor(person: IPerson) {
    this.id = person.id;
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.authorised = person.authorised;
    this.enabled = person.enabled;
    this.colours = person.colours;
  }

  id: number;
  firstName: string;
  lastName: string;
  authorised: boolean;
  enabled: boolean;
  colours: IColour[];

  @computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @computedFrom('fullName')
  get palindrome(): boolean {

    // TODO: Step 5
    //
    // Implement the palindrome computed field.
    // True should be returned When the FullName is spelt the same
    // forwards as it is backwards. The match should ignore any
    // spaces and should also be case insensitive.
    //
    // Example: 'Bo Bob' is a palindrome.
      let myFullName = this.fullName;
      myFullName = myFullName.replace(/ +/g, ""); //regular expression expression used to replace all spaces not just the first one
      myFullName = myFullName.toLocaleLowerCase();
                //easiest way but double execution time

      //METHOD 1
      /*return Array.from(myFullName).toString() === Array.from(myFullName).reverse().toString();*/


      //METHOD 2
      let strLength = Math.floor(myFullName.length / 2);
      
      for (let i = 0; i < strLength; i++) {
          //compares 2 ends till we reach the middle
          if (myFullName[i] !== myFullName[myFullName.length - i - 1]) { //- 1 because our array starts at 0 so we need to shift to align the two ends
              return false;
          }
      }
    return true;
  }
}

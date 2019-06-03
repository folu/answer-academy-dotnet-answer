import { IColour } from '../people/interfaces/icolour';

export class ColourNamesValueConverter {

  toView(colours: IColour[]) {

    // TODO: Step 4
    //
    // Implement the value converter function.
    // Using the colours parameter, convert the list into a comma
    // separated string of colour names. The names should be sorted
    // alphabetically and there should not be a trailing comma.
    //
    // Example: 'Blue, Green, Red'
      const result: string[] = [];

      //copy
      const copyColors = [...colours];

      //sort
      copyColors.sort();

      for (let i = 0; i <= copyColors.length; i++) {
          
          const item = copyColors[i];
          if (item) {
              if ((copyColors.length) == i) { 
                  result.push(item.name);
              }
              else {
                  result.push(item.name + ",");
              }
          }
      }
      return result;
  }

}

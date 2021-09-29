import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(word: string): any {
    if(!word) return null;

    let words = word.split(' ');

    words.forEach((word, index) => {
      if(index > 0 && this.isPreposition(word)){
        words[index] = word.toLowerCase();
      }
      else{
        words[index] = this.toTitleCase(word);
      }
    });
    
    return words.join(' ');
  }

  private isPreposition(word : string) : boolean {
    const PREPOSITIONS = [ 'of', 'the'];
    return PREPOSITIONS.includes(word.toLowerCase());
  }

  private toTitleCase(word : string) : string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "languagePipe"
})
export class LanguagePipe implements PipeTransform {
  transform(name, code) {}
}

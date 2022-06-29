import { Component } from '@angular/core';
import { HttpClient } from './httpClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'section2-question2';

  httpClient = new HttpClient();

  inputText = '';
  categories = [];
  displayedCategories = [];

  onChangeInputText(newText: string) {
    console.log(newText);
    this.getCategory();
  }

  public async getCategory() {
    this.categories = await this.httpClient.getCategory();
    console.log(this.categories);
  }  
}

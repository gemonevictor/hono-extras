import {Component, Input} from '@angular/core';
import {Config} from "../../../../models/config";

@Component({
  selector: 'app-list-config',
  templateUrl: './list-config.component.html',
  styleUrls: ['./list-config.component.scss']
})
export class ListConfigComponent {

  @Input()
  public configs: Config[] = [];

  protected versionLabel: string = 'Version';
  protected updateLabel: string = 'Cloud update time (UTC)';
  protected dataLabel: string = 'Data';
  protected showTextDataArray: boolean[] = [];
  protected showTextLabel: string = 'show text';

  constructor() {
    this.configs.forEach(() => {
      this.showTextDataArray = [false, ...this.showTextDataArray];
    });
  }

  protected showTextData(config: Config, showText: boolean) {
    if (showText) {
      config.binaryData = atob(config.binaryData);
    } else {
      config.binaryData = btoa(config.binaryData);
    }
  }

}

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

  constructor() {
  }


}

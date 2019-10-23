import { Component, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import {NgbdModalBasic} from './modal-basic'
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GMS-angular';
}

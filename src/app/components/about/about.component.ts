
import { Component, OnInit } from '@angular/core';/* Angular core modules */
import { Router} from '@angular/router';/* Modules required for routing */

//import { environment } from '../../../environments/index';/* file determines dev/prod build */
const { shell, remote } = require('electron');/* to handle IPC between renderer and main processes, open external link */
const BrowserWindow = remote.BrowserWindow;

const fs = require('fs');
const app = remote.app;
import * as path from 'path';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit { 
 
  constructor(private router: Router,) {

    remote.getCurrentWindow().setTitle('About');
    
  }

  
  ngOnInit() {   
  
  }
  
 
  
}

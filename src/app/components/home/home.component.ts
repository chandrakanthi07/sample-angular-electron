
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
const { shell, remote } = require('electron');
const BrowserWindow = remote.BrowserWindow;
import * as path from 'path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit { 
 
  constructor(private router: Router) {
    remote.getCurrentWindow().setTitle('Home');    
  }

  
  ngOnInit() {   
  
  }
 
  openWindow() {	 
	  let winPosition = remote.getCurrentWindow().getPosition();
	  let child
      child = new BrowserWindow({
        x: winPosition[0] ,
        y: winPosition[1],
        parent: remote.getCurrentWindow(),
        modal: true,
        width: 300,
        height: 400,
        frame: true,
        autoHideMenuBar: true,
        resizable:false,
        useContentSize:true,
        maximizable:false,
        minimizable:false,
        movable:false,
        fullscreen:false
      });
	  child.setTitle('About');
      child.loadURL('file://' + __dirname + '/index.html#/about');// Not loading the about page.
   

      child.once('ready-to-show', () => {
        child.show();
            
      });

      child.on('close', () => {
         child = null               
      });     
   
  }  
  
   recordScreen() {	 
	this.router.navigate(['/screen'], { skipLocationChange: false });
   
  } 
}

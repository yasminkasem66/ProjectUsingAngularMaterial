import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanagerindex',
  template: ` <app-sidenav></app-sidenav> `,
  styles: [],
})
export class CommonindexComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry :injectable service that allows you to associate icon names with svg urls
    // DomSanitizer protect from cross-site scripting vulnerabilities  when providing asset URLS to the registery 
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg')
    );
  }
  ngOnInit(): void {}
}

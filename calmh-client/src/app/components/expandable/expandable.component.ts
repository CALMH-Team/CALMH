import { Component, ViewChild, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements AfterViewInit {
  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper: ElementRef;
  @Input('expanded') expanded = false;
  @Input('expandHeight') expandHeight = '1000px';

  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, 'max-height', this.expandHeight);
  }
}
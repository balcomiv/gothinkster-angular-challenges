import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() iconClasses = '';

  @Input() title = '';

  @Input() subtitle = '';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';
import { Random as RandomService } from '../random';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {
  myNumber?: number;
  @Input() max: number = 10;

  constructor(private randomService: RandomService) {}

  btnClick(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  isSmallerThanHalf(): boolean {
    if (this.myNumber === undefined) {
      return false;
    }
    return this.myNumber < 0.5 * this.max;
  }
}

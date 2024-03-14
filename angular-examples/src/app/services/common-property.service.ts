import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CommonPropertyService {
  private commonProperty = 0;

  private observableProperty = new Subject<number>();

  changeState() {
    this.commonProperty += 1;
    this.observableProperty.next(this.commonProperty);
  }

  getStateInfo(): number {
    return this.commonProperty;
  }

  getObservalbeProperty(): Observable<number> {
    return this.observableProperty.asObservable();
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dong'
})
export class DongPipe implements PipeTransform {
  transform(value: number): string {
    return `${value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`.replace(/₫/g, 'đ');
  }
}

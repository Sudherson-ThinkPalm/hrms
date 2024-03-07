import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  standalone: true,
  template: `
    <div>
      <button (click)="onClick()">View</button>
    </div>
  `,
})
export class ViewButton implements ICellRendererAngularComp {
  public params!: ICellRendererParams;

  constructor(private router: Router) {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  onClick(): void {
    this.router.navigate(['/employee', this.params.data.id]);
  }
}

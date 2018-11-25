import { Component } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-table',
    templateUrl:'./tabla.component.html'
})
export class TablaComponent {

    public state: State = {
        skip: 0,
        take: 5,

        // Initial filter descriptor
        filter: {
          logic: 'and',
          filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
        }
    };

    public gridData: GridDataResult = process(sampleProducts, this.state);

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridData = process(sampleProducts, this.state);
    }
}
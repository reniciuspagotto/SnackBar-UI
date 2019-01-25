import { Component } from '@angular/core';
import { ApiHandler } from 'src/app/providers/api-provider';
import { Router } from '@angular/router';
import { SnackOrderService } from '../snackOrder.service';

@Component({
    selector: 'snack',
    templateUrl: './snack.component.html',
    styleUrls: ['./snack.component.scss']
})
export class SnackComponent {

    snacks: any[] = [];
    snacksChoosed: any[] = []

    constructor(
        private _apiHandler: ApiHandler,
        private _router: Router,
        public _snackService: SnackOrderService) {

        _apiHandler.getAll('Snack').subscribe(data => {
            this.snacks = data;
        });
    }

    nextPage(snacks: any[]) {
        const valid = this.validateQuantity(snacks);

        if (!valid) {
            alert('Inclua pelo menos um lanche');
        } else {
            this._snackService.snacks = this.snacksChoosed;
            this._router.navigate(['../order']);
        }
    }

    validateQuantity(snacks: any[]): boolean {

        this.snacksChoosed = [];

        snacks.forEach(item => {
            if (item.quantity > 0) {
                for (var i = 0; i < item.quantity; i++) { 
                    this.snacksChoosed.push(item);
                }
            }
        })

        if (this.snacksChoosed.length == 0) {
            return false
        }

        return true;
    }

    valuechange(qtd, index) {
        this.snacks[index].quantity = qtd.target.value;
    }
}
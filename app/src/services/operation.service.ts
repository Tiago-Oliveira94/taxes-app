import {GetTaxesResponseDTO} from '../dto/get.taxes.response.dto';
import parseOperations from '../parsers/operation.parser';
import {Operation} from '../types/operation.type';

let quantity = 0;
let profits = 0;
let avgPrice = 0;
let taxes: GetTaxesResponseDTO[] = [];

export class OperationService {
  constructor() {}

  calculateTaxes(line: string): void {
    const operations = parseOperations(line);

    operations.forEach((op: Operation) => {
      if (op.operation === 'buy') {
        this.calculateBuy(op);
      } else if (op.operation === 'sell') {
        this.calculateSell(op);
      }
    });

    console.log(JSON.stringify(taxes));
    this.cleanState();
  }

  private calculateBuy(op: Operation): void {
    avgPrice = this.calculateAveragePrice(op);
    quantity += op.quantity;
    taxes.push({tax: 0.0});
  }

  private calculateSell(op: Operation): void {
    quantity -= op.quantity;
    profits += op.unitCost * op.quantity - avgPrice * op.quantity;
    const tax = +(profits * 0.2).toFixed(2);

    if (op.unitCost * op.quantity > 20000 && profits > 0) {
      taxes.push({tax: tax});
      profits = 0;
    } else taxes.push({tax: 0.0});
  }

  private calculateAveragePrice(operation: Operation): number {
    const result =
      (quantity * avgPrice + operation.quantity * operation.unitCost) /
      (quantity + operation.quantity);

    return result as number;
  }

  private cleanState() {
    quantity = 0;
    profits = 0;
    taxes = [];
  }
}

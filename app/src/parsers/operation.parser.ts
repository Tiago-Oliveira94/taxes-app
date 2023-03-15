import {Operation} from '../types/operation.type';

export default function parseOperations(line: string): Operation[] {
  const operations = JSON.parse(line);

  const parsedOperations = operations.map((op: Object) => {
    return {
      operation: Object.values(op)[0],
      unitCost: Object.values(op)[1],
      quantity: Object.values(op)[2],
    } as Operation;
  });
  return parsedOperations;
}

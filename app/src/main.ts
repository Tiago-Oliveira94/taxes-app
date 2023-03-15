import * as readline from 'node:readline';
import {stdin as input, stdout as output} from 'node:process';
import {OperationService} from './services/operation.service';

type RL = readline.Interface;
type readFunction = (rl: RL) => (line: string) => void;
const operationService = new OperationService();

const inputHandler: readFunction = rl => line => {
  if (line === '') {
    console.log('finish process!');
    rl.close();
  } else {
    operationService.calculateTaxes(line);
  }
};

export const main = (): void => {
  const rl = readline.createInterface({input, output, terminal: false});

  console.log('Please insert the data:');

  rl.on('line', inputHandler(rl));
};

main();

/* eslint-disable node/no-unpublished-require */
import {main} from '../main';
const stdin = require('mock-stdin').stdin();

// mock console.log
console.log = jest.fn();

describe('operation.service.ts', () => {
  const execute = (input: string | null): void => {
    main();
    stdin.send(input);
    stdin.end();
    stdin.reset();
  };

  describe('when input is valid', () => {
    const input =
      '[{"operation":"buy", "unit-cost":10.00, "quantity": 100},{"operation":"sell", "unit-cost":15.00, "quantity": 50},{"operation":"sell", "unit-cost":15.00, "quantity": 50}]';

    it('should print the correct output', () => {
      const expectedResult = '[{"tax":0},{"tax":0},{"tax":0}]';
      execute(input);
      expect(console.log).toBeCalledWith(expectedResult);
    });
  });

  describe('when input is blank', () => {
    const input = '\n';

    it('should print a finish progress message', () => {
      const expectedResult = 'finish process!';
      execute(input);
      expect(console.log).toBeCalledWith(expectedResult);
    });
  });
});

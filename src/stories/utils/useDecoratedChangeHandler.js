import { useMemo } from 'react';
import { decorate } from '@storybook/addon-actions';

export default function useDecoratedChangeHandler(inputName, changeHandler) {
  return useMemo(() => {
    const decoratedHandler = decorate([([event]) => {
      const newValue = typeof event === 'string' ? event : event.target.value;
      changeHandler(newValue);
      return [newValue];
    }]);
    return decoratedHandler.action(`${inputName} value`);
  }, [changeHandler, inputName]);
}

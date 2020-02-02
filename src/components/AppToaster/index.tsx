import { Position, Toaster } from '@blueprintjs/core';

/** Singleton toaster instance. Create separate instances for different options. */
export const AppToaster = Toaster.create({
  className: 'recipe-toaster z-1500',
  position: Position.TOP_RIGHT,
});

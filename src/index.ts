export { catchAsync } from './catchAsync';

export const asyncHandle = function(fn: Function) {
  Promise.resolve(fn(arguments)).catch(() => {
    return 'err';
  });
};

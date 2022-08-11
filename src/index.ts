import Express from 'express';
interface callback {
  (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ): void;
}

export const catchAsync = (fn: callback) => (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  Promise.resolve(fn(req, res, next)).catch(err => next(err));
};

export const asyncHandle = function(fn: Function) {
  Promise.resolve(fn(arguments)).catch(() => {
    return 'err';
  });
};

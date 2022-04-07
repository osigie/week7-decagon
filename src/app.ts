import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes/indexRoutes';
const app = express();
// import anotherR from './routes/newRoute';

// // view engine setup
app.set('views', path.join(__dirname, '..', '..', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//app router

// error handler
app.use(function (
  err: createError.HttpError,
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// export default app;

// import createError, { HttpError } from 'http-errors';
// import express, { Request, Response, NextFunction } from 'express';
// import path from 'path';
// import logger from 'morgan';
// import router from './routes/indexRoutes';
// import anotherR from './routes/newRoute';

// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use('/', anotherR);

// // catch 404 and forward to error handler
// app.use(function (_req, _res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (
//   err: HttpError,
//   req: Request,
//   res: Response,
//   _next: NextFunction,
// ) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

export default app;

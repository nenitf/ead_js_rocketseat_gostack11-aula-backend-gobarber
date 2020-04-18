// add propriedade nova na requisição do express
// isso facilita para todos middlewares terem acesso
// ao id se for setado
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}

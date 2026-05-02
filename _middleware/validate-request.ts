import { abort } from "node:process";

export default validateRequest;

function validateRequest(req: any, next: any, schema: any) {
  const options = {
    abortEarly: false, //include all errors
    allowUnknown: true, // ignore unknown erros
    stripUnknown: true, // remove unknown erros
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    next(`Valdiation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }
}
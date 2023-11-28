import * as jwt from "jsonwebtoken";

class Jwt {
  static sign(payload) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      jwt.sign(payload, "dental-health", function (err, token) {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
  }
}

export default Jwt;

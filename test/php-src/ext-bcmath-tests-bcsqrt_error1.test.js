// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcsqrt_error1.phpt
  it("bcsqrt — Get the square root of an arbitrary precision number", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcsqrt('-9');\n} catch (ValueError $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcdiv_error1.phpt
  it("bcdiv — Divide two arbitrary precision numbers", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcdiv('10.99', '0');\n} catch (DivisionByZeroError $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

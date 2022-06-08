// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcmod_error2.phpt
  it("bcmod() - mod by 0", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcmod(\"10\", \"0\");\n} catch (DivisionByZeroError $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

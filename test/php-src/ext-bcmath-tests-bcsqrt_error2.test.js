// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcsqrt_error2.phpt
  it("bcsqrt() requires a well-formed value", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcsqrt('a');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

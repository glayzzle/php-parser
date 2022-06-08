// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcpow_error1.phpt
  it("bcpow() does not support non-integral exponents", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(bcpow('1', '1.1', 2));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

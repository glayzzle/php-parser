// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcpow_error2.phpt
  it("bcpow() does not support exponents >= 2**63", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(bcpow('0', '9223372036854775808', 2));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

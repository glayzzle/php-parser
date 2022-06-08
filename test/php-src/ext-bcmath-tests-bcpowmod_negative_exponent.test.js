// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcpowmod_negative_exponent.phpt
  it("bc_raisemod's expo can't be negative", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(bcpowmod('1', '-1', '2'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

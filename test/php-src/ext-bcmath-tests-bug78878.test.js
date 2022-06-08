// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug78878.phpt
  it("Bug #78878 (Buffer underflow in bc_shift_addsub)", function () {
    expect(parser.parseCode("<?php\ntry {\n    print bcmul(\"\\xB26483605105519922841849335928742092\", bcpowmod(2, 65535, -4e-4));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

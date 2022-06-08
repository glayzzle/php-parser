// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcpowmod_zero_modulus.phpt
  it("bc_raisemod's mod can't be zero", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(bcpowmod('1', '1', '0'));\n} catch (DivisionByZeroError $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

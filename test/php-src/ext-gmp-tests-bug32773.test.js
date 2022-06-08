// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug32773.phpt
  it("Bug #32773 (binary GMP functions returns unexpected value, when second parameter is int(0))", function () {
    expect(parser.parseCode("<?php\necho '10 + 0 = ', gmp_strval(gmp_add(10, 0)), \"\\n\";\necho '10 + \"0\" = ', gmp_strval(gmp_add(10, '0')), \"\\n\";\ntry {\n    var_dump(gmp_div(10, 0));\n} catch (\\DivisionByZeroError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_div_qr(10, 0));\n} catch (\\DivisionByZeroError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

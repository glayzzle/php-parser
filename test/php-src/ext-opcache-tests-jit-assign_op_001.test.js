// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_op_001.phpt
  it("JIT ASSIGN_OP: 001", function () {
    expect(parser.parseCode("<?php\nfunction test1($a) {\n    $a %= 0;\n}\nfunction test2($a) {\n    $a <<= -1;\n}\ntry {\n    test1(1);\n} catch (DivisionByZeroError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test2(1);\n} catch (ArithmeticError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52355.phpt
  it("Bug #52355 (Negating zero does not produce negative zero)", function () {
    expect(parser.parseCode("<?php\nvar_dump(-0.0);\nvar_dump(-(float)\"0\");\n$foo = -sin(0);\nvar_dump($foo);\ntry {\n    var_dump(1.0 / -0.0);\n} catch (\\DivisionByZeroError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

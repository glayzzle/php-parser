// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_arrays.phpt
  it("Constant expressions with arrays", function () {
    expect(parser.parseCode("<?php\nconst a = [1,2,[3,[4]]];\nconst b = a[0];\nconst c = a[2][0];\nconst d = a[2];\nconst e = [\"string\" => [1]][\"string\"][0];\nvar_dump(b, c, e);\nfunction test ($a = d[1][0]) {\n    var_dump($a);\n}\ntest();\nclass foo {\n    const bar = [1][0];\n}\nvar_dump(foo::bar);\nvar_dump(a, a[0], a[2], a[2][1], a[3]);\n?>")).toMatchSnapshot();
  });
});

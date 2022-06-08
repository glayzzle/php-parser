// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug69159.phpt
  it("Bug #69159 (Opcache causes problem when passing a variable variable to a function)", function () {
    expect(parser.parseCode("<?php\n$i = 1;\n$x1 = \"okey\";\nmyFunction(${\"x$i\"});\nfunction myFunction($x) {\n    var_dump($x);\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/bug49244.phpt
  it("Bug #49244 (Floating point NaN cause garbage characters)", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 10; $i++) {\n    printf(\"{%f} %1\\$f\\n\", pow(-1.0, 0.3));\n    printf(\"{%f} %1\\$f\\n\", pow(-1.0, 0.3));\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug27468.phpt
  it("Bug #27468 (foreach in __destruct() causes segfault)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function __destruct() {\n        foreach ($this->x as $x);\n    }\n}\nnew foo();\necho 'OK';\n?>")).toMatchSnapshot();
  });
});

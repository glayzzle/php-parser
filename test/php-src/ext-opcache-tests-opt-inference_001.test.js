// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/inference_001.phpt
  it("Type inference 001: Invalid type narrowing warning", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for ($i = 0; $i < 2; $i++) {\n        $obj->x;\n        $obj = new stdClass;\n    }\n}\ntest();\nclass Test {\n    public int $x = 1;\n}\nfunction test2() {\n    for ($i = 0; $i < 2; $i++) {\n        $obj->x;\n        $obj = new Test;\n    }\n}\ntest2();\n?>\nDONE")).toMatchSnapshot();
  });
});

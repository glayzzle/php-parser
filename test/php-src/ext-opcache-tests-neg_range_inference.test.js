// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/neg_range_inference.phpt
  it("Incorrect negative range inference", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for ($i = 0; $i < 10; $i++) {\n        if ($i != 5) {\n            $t = (int) ($i < 5);\n            var_dump($t);\n        }\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});

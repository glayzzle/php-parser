// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/block_pass_003.phpt
  it("Block Pass 003: Inorrect constant substitution in FETCH_LIST_R", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for ($i = 0; $i < 10; $i++) {\n        list($a, $b) = 1 ? 1 : 2;\n    }\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});

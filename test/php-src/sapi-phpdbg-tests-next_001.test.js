// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/next_001.phpt
  it("Test next command on function boundaries", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n\techo 0 . PHP_EOL;\n}\nfoo();\necho 1 . PHP_EOL;\n")).toMatchSnapshot();
  });
});

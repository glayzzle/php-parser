// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_rfork.phpt
  it("Test function pcntl_rfork() with no flag.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test with no flags ***\\n\";\n$pid = pcntl_rfork(0);\nif ($pid == 0) {\n\techo \"child\";\n  exit;\n}\n?>")).toMatchSnapshot();
  });
});

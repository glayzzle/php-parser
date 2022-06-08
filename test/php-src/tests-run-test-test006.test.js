// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test006.phpt
  it("Error messages are shown", function () {
    expect(parser.parseCode("<?php\n// If this test fails ask the developers of run-test.php\n$error = 1 / 0;\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/run_001.phpt
  it("Test argv passing", function () {
    expect(parser.parseCode("<?php\nvar_dump($argc, $argv);\n")).toMatchSnapshot();
  });
});

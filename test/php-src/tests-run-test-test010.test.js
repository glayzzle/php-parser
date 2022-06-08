// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test010.phpt
  it("STDIN input", function () {
    expect(parser.parseCode("<?php\nvar_dump(stream_get_contents(STDIN));\nvar_dump(stream_get_contents(fopen('php://stdin', 'r')));\nvar_dump(file_get_contents('php://stdin'));\n?>")).toMatchSnapshot();
  });
});

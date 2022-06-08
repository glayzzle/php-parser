// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/normal_exit.phpt
  it("A script with die() must end \"normally\"", function () {
    expect(parser.parseCode("<?php\n(function($argv) {\n\tdie();\n})($argv);\n")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_open_basic1.phpt
  it("Test timezone_open() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing timezone_open() : basic functionality ***\\n\";\nvar_dump( timezone_open(\"GMT\") );\nvar_dump( timezone_open(\"Europe/London\") );\nvar_dump( timezone_open(\"America/Los_Angeles\") );\n?>")).toMatchSnapshot();
  });
});

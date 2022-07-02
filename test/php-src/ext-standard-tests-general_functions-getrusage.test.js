// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getrusage.phpt
  it("getrusage() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gettype(getrusage()));\nvar_dump(gettype(getrusage(1)));\nvar_dump(gettype(getrusage(-1)));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

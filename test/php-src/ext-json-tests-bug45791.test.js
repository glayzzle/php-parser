// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug45791.phpt
  it("Bug #45791 (json_decode() does not handle number 0e0)", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_decode('{\"zero\": 0e0}'));\n?>")).toMatchSnapshot();
  });
});

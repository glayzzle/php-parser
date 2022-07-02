// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/dl-check-enabled.phpt
  it("dl() returns false when disabled via INI settings", function () {
    expect(parser.parseCode("<?php\nvar_dump(dl('foo'));\n?>")).toMatchSnapshot();
  });
});

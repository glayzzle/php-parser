// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/bug77338.phpt
  it("Bug #77338: get_browser with empty string", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_browser(\"\"));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/get_browser_no_default.phpt
  it("get_browser() without a default", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_browser(\"\"));\n?>")).toMatchSnapshot();
  });
});

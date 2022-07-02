// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/get_browser_variation2.phpt
  it("Test get_browser() function variation : Return data as object", function () {
    expect(parser.parseCode("<?php\n$agent = \"Opera/7.11 (Windows NT 5.1; U) [en]\";\nvar_dump(get_browser($agent));\n?>")).toMatchSnapshot();
  });
});

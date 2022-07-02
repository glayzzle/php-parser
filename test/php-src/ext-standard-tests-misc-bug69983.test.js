// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/bug69983.phpt
  it("Bug #69983 (get_browser fails with user agent of null)", function () {
    expect(parser.parseCode("<?php\n$browser=get_browser(NULL, true);\nprint_r($browser);\n?>")).toMatchSnapshot();
  });
});

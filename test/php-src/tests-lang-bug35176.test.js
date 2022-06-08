// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug35176.phpt
  it("Bug #35176 (include()/require()/*_once() produce wrong error messages about main())", function () {
    expect(parser.parseCode("<?php\nrequire_once('nonexistent.php');\n?>")).toMatchSnapshot();
  });
});

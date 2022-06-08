// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_018.phpt
  it("output buffering - error message nirvana bug #37714", function () {
    expect(parser.parseCode("<?php\nob_start('ob_gzhandler');\n?>")).toMatchSnapshot();
  });
});

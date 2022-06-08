// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/filter_default_deprecation.phpt
  it("filter.default is deprecated", function () {
    expect(parser.parseCode("<?php\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

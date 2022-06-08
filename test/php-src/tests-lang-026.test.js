// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/026.phpt
  it("Testing string scanner conformance", function () {
    expect(parser.parseCode("<?php echo \"\\\"\\t\\\\'\" . '\\n\\\\\\'a\\\\\\b\\\\' ?>")).toMatchSnapshot();
  });
});

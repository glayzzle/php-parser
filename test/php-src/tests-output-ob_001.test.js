// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_001.phpt
  it("output buffering - nothing", function () {
    expect(parser.parseCode("<?php\necho \"foo\\n\";\n?>")).toMatchSnapshot();
  });
});

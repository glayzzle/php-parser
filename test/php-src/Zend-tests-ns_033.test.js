// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_033.phpt
  it("033: Import statement with non-compound name", function () {
    expect(parser.parseCode("<?php\nuse A;\nuse \\B;\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/duplicate_label_error.phpt
  it("Duplicate labels are not allowed", function () {
    expect(parser.parseCode("<?php\nfoo:\nfoo:\ngoto foo;\n?>")).toMatchSnapshot();
  });
});

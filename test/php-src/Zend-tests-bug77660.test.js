// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77660.phpt
  it("Bug #77660 (Segmentation fault on break 2147483648)", function () {
    expect(parser.parseCode("<?php\nfor(;;) break 2147483648;\n?>")).toMatchSnapshot();
  });
});

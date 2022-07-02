// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30519.phpt
  it("Bug #30519 (Interface not existing says Class not found)", function () {
    expect(parser.parseCode("<?php\nclass test implements a {\n}\n?>")).toMatchSnapshot();
  });
});

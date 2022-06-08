// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump06.phpt
  it("jump 06: goto to undefined label", function () {
    expect(parser.parseCode("<?php\ngoto L1;\n?>")).toMatchSnapshot();
  });
});

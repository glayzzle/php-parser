// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77530.phpt
  it("Bug #77530: PHP crashes when parsing '(2)::class'", function () {
    expect(parser.parseCode("<?php\necho (2)::class;\n?>")).toMatchSnapshot();
  });
});

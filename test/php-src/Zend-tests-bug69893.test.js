// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69893.phpt
  it("Bug #69893: Strict comparison between integer and empty string keys crashes", function () {
    expect(parser.parseCode("<?php\nvar_dump([0 => 0] === [\"\" => 0]);\n?>")).toMatchSnapshot();
  });
});

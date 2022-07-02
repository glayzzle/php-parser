// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_offset.phpt
  it("Ensure \"undefined offset\" notice formats message correctly when undefined key is negative", function () {
    expect(parser.parseCode("<?php\n[][-1];\n[][-1.1];\n(new ArrayObject)[-1];\n(new ArrayObject)[-1.1];\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

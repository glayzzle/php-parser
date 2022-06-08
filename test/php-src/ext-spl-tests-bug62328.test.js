// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62328.phpt
  it("Bug #62328 (cast_object takes precedence over __toString)", function () {
    expect(parser.parseCode("<?php\nclass SplFileInfo62328 extends SplFileInfo\n{\n    public function __toString()\n    {\n        return '__toString';\n    }\n}\n$fi = new SplFileInfo62328(__FILE__);\necho (string)$fi . PHP_EOL;\necho (string)$fi->__toString() . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});

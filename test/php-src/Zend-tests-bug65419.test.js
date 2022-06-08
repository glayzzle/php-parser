// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65419.phpt
  it("Bug #65419 (Inside trait, self::class != __CLASS__)", function () {
    expect(parser.parseCode("<?php\ntrait abc\n{\n  static function def()\n  {\n    echo self::class, \"\\n\";\n    echo __CLASS__, \"\\n\";\n  }\n}\nclass ghi\n{\n  use abc;\n}\nghi::def();\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/semi_reserved_007.phpt
  it("Edge case: self::self, self::parent, parent::self semi reserved constants access", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const self = \"self\";\n    const parent = \"parent\";\n    public function __construct() {\n        echo \"From \", __METHOD__, \":\", PHP_EOL;\n        echo self::self, PHP_EOL;\n        echo self::parent, PHP_EOL;\n    }\n}\nclass Bar extends Foo {\n    public function __construct() {\n        parent::__construct();\n        echo \"From \", __METHOD__, \":\", PHP_EOL;\n        echo parent::self, PHP_EOL;\n        echo parent::parent, PHP_EOL;\n    }\n}\nnew Bar;\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});

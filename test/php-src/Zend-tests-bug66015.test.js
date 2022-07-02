// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66015.phpt
  it("Bug #66015 (wrong array indexing in class's static property)", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n   const FIRST = 1;\n   const SECOND = 2;\n   const THIRD = 3;\n   protected static $array = [\n       self::FIRST => 'first',\n       'second',\n       'third',\n       4,\n   ];\n   public function __construct()\n   {\n       var_export(self::$array);\n   }\n}\n$test = new Test();\n?>")).toMatchSnapshot();
  });
});

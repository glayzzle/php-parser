// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44141.phpt
  it("Bug #44141 (private parent constructor callable through static function)", function () {
    expect(parser.parseCode("<?php\nclass X\n{\n        public $x;\n        private function __construct($x)\n        {\n                $this->x = $x;\n        }\n}\nclass Y extends X\n{\n        static public function cheat($x)\n        {\n                return new Y($x);\n        }\n}\n$y = Y::cheat(5);\necho $y->x, PHP_EOL;\n?>")).toMatchSnapshot();
  });
});

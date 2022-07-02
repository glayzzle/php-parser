// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70321.phpt
  it("bug #70321 (Magic getter breaks reference to array property)", function () {
    expect(parser.parseCode("<?php\nclass foo implements arrayAccess\n{\n    private $bar;\n    public function __construct()\n    {\n        $this->bar = new bar();\n    }\n    public function & __get($key)\n    {\n        $bar = $this->bar;\n        return $bar;\n    }\n    public function & offsetGet($key): mixed {\n        $bar = $this->bar;\n        return $bar;\n    }\n    public function offsetSet($key, $val): void {\n    }\n    public function offsetUnset($key): void {\n    }\n    public function offsetExists($key): bool {\n    }\n}\nclass bar { public $onBaz = []; }\n$foo = new foo();\n$foo->bar->onBaz[] = function() {};\nvar_dump($foo->bar->onBaz);\n$foo = new foo();\n$foo[\"bar\"]->onBaz[] = function() {};\nvar_dump($foo->bar->onBaz);\n?>")).toMatchSnapshot();
  });
});

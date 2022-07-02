// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/005.phpt
  it("testing reusing anons that implement an interface", function () {
    expect(parser.parseCode("<?php\nclass Outer {\n    protected $data;\n    public function __construct(&$data) {\n        /* array access will be implemented by the time we get to here */\n        $this->data = &$data;\n    }\n    public function getArrayAccess() {\n        /* create a child object implementing array access */\n        /* this grants you access to protected methods and members */\n        return new class($this->data) implements ArrayAccess {\n            public function offsetGet($offset): mixed { return $this->data[$offset]; }\n            public function offsetSet($offset, $data): void { $this->data[$offset] = $data; }\n            public function offsetUnset($offset): void { unset($this->data[$offset]); }\n            public function offsetExists($offset): bool { return isset($this->data[$offset]); }\n        };\n    }\n}\n$data = array(\n    rand(1, 100),\n    rand(2, 200)\n);\n$outer = new Outer($data);\n$proxy = $outer->getArrayAccess();\n/* null because no inheritance, so no access to protected member */\nvar_dump(@$outer->getArrayAccess()[0]);\n?>")).toMatchSnapshot();
  });
});

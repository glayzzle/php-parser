// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/004.phpt
  it("testing anonymous inheritance", function () {
    expect(parser.parseCode("<?php\nclass Outer {\n    protected $data;\n    public function __construct($data) {\n        $this->data = $data;\n    }\n    public function getArrayAccess() {\n        /* create a proxy object implementing array access */\n        return new class($this->data) extends Outer implements ArrayAccess {\n            public function offsetGet($offset): mixed          { return $this->data[$offset]; }\n            public function offsetSet($offset, $data): void   { $this->data[$offset] = $data; }\n            public function offsetUnset($offset): void        { unset($this->data[$offset]); }\n            public function offsetExists($offset): bool       { return isset($this->data[$offset]); }\n        };\n    }\n}\n$outer = new Outer(array(\n    rand(1, 100)\n));\n/* not null because inheritance */\nvar_dump($outer->getArrayAccess()[0]);\n?>")).toMatchSnapshot();
  });
});

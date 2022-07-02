// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/__serialize_005.phpt
  it("__serialize() mechanism (005): parent::__unserialize() is safe", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $data;\n    public function __construct(array $data) {\n        $this->data = $data;\n    }\n    public function __serialize() {\n        return $this->data;\n    }\n    public function __unserialize(array $data) {\n        $this->data = $data;\n    }\n}\nclass B extends A {\n    private $data2;\n    public function __construct(array $data, array $data2) {\n        parent::__construct($data);\n        $this->data2 = $data2;\n    }\n    public function __serialize() {\n        return [$this->data2, parent::__serialize()];\n    }\n    public function __unserialize(array $payload) {\n        [$data2, $data] = $payload;\n        parent::__unserialize($data);\n        $this->data2 = $data2;\n    }\n}\n$common = new stdClass;\n$obj = new B([$common], [$common]);\nvar_dump($s = serialize($obj));\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});

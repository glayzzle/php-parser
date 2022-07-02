// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/__serialize_001.phpt
  it("__serialize() mechanism (001): Basics", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n    public $prop2;\n    public function __serialize() {\n        return [\"value\" => $this->prop, 42 => $this->prop2];\n    }\n    public function __unserialize(array $data) {\n        $this->prop = $data[\"value\"];\n        $this->prop2 = $data[42];\n    }\n}\n$test = new Test;\n$test->prop = \"foobar\";\n$test->prop2 = \"barfoo\";\nvar_dump($s = serialize($test));\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});

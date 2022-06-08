// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug71835.phpt
  it("Bug #71835 (json_encode sometimes incorrectly detects recursion with JsonSerializable)", function () {
    expect(parser.parseCode("<?php\nclass SomeClass implements JsonSerializable {\n    public function jsonSerialize(): mixed {\n        return [get_object_vars($this)];\n    }\n}\n$class = new SomeClass;\n$arr = [$class];\nvar_dump(json_encode($arr));\nclass SomeClass2 implements JsonSerializable {\n    public function jsonSerialize(): mixed {\n        return [(array)$this];\n    }\n}\n$class = new SomeClass2;\n$arr = [$class];\nvar_dump(json_encode($arr));\n?>")).toMatchSnapshot();
  });
});

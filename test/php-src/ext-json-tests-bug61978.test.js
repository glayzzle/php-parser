// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug61978.phpt
  it("Bug #61978 (Object recursion not detected for classes that implement JsonSerializable)", function () {
    expect(parser.parseCode("<?php\nclass JsonTest1 {\n    public $test;\n    public $me;\n    public function __construct() {\n        $this->test = '123';\n        $this->me  = $this;\n    }\n}\nclass JsonTest2 implements JsonSerializable {\n    public $test;\n    public function __construct() {\n        $this->test = '123';\n    }\n    public function jsonSerialize(): mixed {\n        return array(\n            'test' => $this->test,\n            'me'   => $this\n        );\n    }\n}\n$obj1 = new JsonTest1();\nvar_dump(json_encode($obj1, JSON_PARTIAL_OUTPUT_ON_ERROR));\necho \"==\\n\";\n$obj2 = new JsonTest2();\nvar_dump(json_encode($obj2, JSON_PARTIAL_OUTPUT_ON_ERROR));\n?>")).toMatchSnapshot();
  });
});

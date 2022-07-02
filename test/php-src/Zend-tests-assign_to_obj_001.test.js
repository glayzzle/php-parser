// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_to_obj_001.phpt
  it("assign to object leaks with ref", function () {
    expect(parser.parseCode("<?php\nfunction &a($i) {\n    $a = \"str\". $i .\"ing\";\n    return $a;\n}\nclass A {\n    public function test() {\n        $this->a = a(1);\n        unset($this->a);\n    }\n}\n$a = new A;\n$a->test();\n$a->test();\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64988.phpt
  it("Bug #64988 (Class loading order affects E_WARNING warning)", function () {
    expect(parser.parseCode("<?php\nabstract class Base1 {\n    public function insert(array $data){\n        return array_reverse($data);\n    }\n}\nclass Noisy1 extends Base1 {\n    public function insert(array $data, $option1 = Null) {\n        if (!empty($option1)) {\n            $data['option1'] = $option1;\n        }\n        return parent::insert($data);\n    }\n}\nclass Smooth1 extends Noisy1 {\n    public function insert(array $data) {\n        return parent::insert($data, count($data));\n    }\n}\n$o = new Smooth1();\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});

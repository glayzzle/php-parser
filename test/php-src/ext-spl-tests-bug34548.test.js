// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug34548.phpt
  it("Bug #34548 (Method append() in class extended from ArrayObject crashes PHP)", function () {
    expect(parser.parseCode("<?php\nclass Collection extends ArrayObject\n{\n    public function add($dataArray)\n    {\n        foreach($dataArray as $value) $this->append($value);\n    }\n    public function offsetSet($index, $value): void\n    {\n        parent::offsetSet($index, $value);\n    }\n}\n$data1=array('one', 'two', 'three');\n$data2=array('four', 'five');\n$foo=new Collection($data1);\n$foo->add($data2);\nprint_r($foo->getArrayCopy());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

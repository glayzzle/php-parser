// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70959.phpt
  it("Bug #70959 (ArrayObject unserialize does not restore protected fields)", function () {
    expect(parser.parseCode("<?php\nclass testObject extends ArrayObject {\n    protected $test;\n    public function getTest() {\n        return $this->test;\n    }\n    public function setTest($test) {\n        $this->test = $test;\n    }\n}\n$obj = new testObject();\n$obj->setTest('test');\nvar_dump($obj->getTest());\n$obj2 = unserialize(serialize($obj));\nvar_dump($obj2->getTest());\n?>")).toMatchSnapshot();
  });
});

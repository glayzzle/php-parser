// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_001.phpt
  it("Testing array dereference", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nfunction a() {\n    return array(1,array(5));\n}\nvar_dump(a()[1][0]); // int(5)\nfunction b() {\n    return array();\n}\nvar_dump(b()[0]); // Notice: Undefined array key 0\nclass foo {\n    public $y = 1;\n    public function test() {\n        return array(array(array('foobar')));\n    }\n}\nfunction c() {\n    return array(new foo);\n}\nvar_dump(c()[0]->y); // int(1)\nfunction d() {\n    $obj = new foo;\n    return $obj->test();\n}\nvar_dump(d()[0][0][0][3]); // string(1) \"b\"\nfunction e() {\n    $y = 'bar';\n    $x = array('a' => 'foo', 'b' => $y);\n    return $x;\n}\nvar_dump(e()['b']); // string(3) \"bar\"\n?>")).toMatchSnapshot();
  });
});

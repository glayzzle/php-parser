// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_destructuring_to_special_variables.phpt
  it("list() can be used to destructure to string offsets, __set and ArrayAccess::offsetSet", function () {
    expect(parser.parseCode("<?php\nclass Obj {\n    public $values = [];\n    public function __set($name, $value) {\n        $this->values[$name] = $value;\n    }\n}\nclass Arr implements ArrayAccess {\n    public $values = [];\n    public function offsetSet($name, $value): void {\n        $this->values[$name] = $value;\n    }\n    public function offsetGet($name): mixed {}\n    public function offsetExists($name): bool {}\n    public function offsetUnset($name): void {}\n}\n$str = 'ab';\nlist($str[0], $str[1]) = ['x', 'y'];\nvar_dump($str);\n$obj = new Obj;\nlist($obj->foo, $obj->bar) = ['foo', 'bar'];\nvar_dump($obj->values);\n$arr = new Arr;\nlist($arr['foo'], $arr['bar']) = ['foo', 'bar'];\nvar_dump($arr->values);\n?>")).toMatchSnapshot();
  });
});

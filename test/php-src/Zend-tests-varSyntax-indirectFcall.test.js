// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/indirectFcall.phpt
  it("Indirect function calls", function () {
    expect(parser.parseCode("<?php\nfunction id($x = 'id') { return $x; }\nvar_dump(0);\nid('var_dump')(1);\nid('id')('var_dump')(2);\nid('id')('id')('var_dump')(3);\nid()()('var_dump')(4);\nid(['udef', 'id'])[1]()('var_dump')(5);\n(id((object) ['a' => 'id', 'b' => 'udef'])->a)()()()()('var_dump')(6);\n$id = function($x) { return $x; };\n$id($id)('var_dump')(7);\n(function($x) { return $x; })('id')('var_dump')(8);\n($f = function($x = null) use (&$f) {\n    return $x ?: $f;\n})()()()('var_dump')(9);\nclass Test {\n    public static function id($x = [__CLASS__, 'id']) { return $x; }\n}\n$obj = new Test;\n[$obj, 'id']()('id')($id)('var_dump')(10);\n['Test', 'id']()()('var_dump')(11);\n'id'()('id')('var_dump')(12);\n('i' . 'd')()('var_dump')(13);\n'\\id'('var_dump')(14);\n?>")).toMatchSnapshot();
  });
});

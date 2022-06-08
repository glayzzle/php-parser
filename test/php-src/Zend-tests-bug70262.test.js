// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70262.phpt
  it("Bug #70262 (Accessing array crashes)", function () {
    expect(parser.parseCode("<?php\n$array = array();\n$array[] = 1; // make this not immutable\n$extra = $array; // make the refcount == 2\nclass A {\n    public function getObj($array) {\n        $obj = new Stdclass;\n        $obj->arr = $array; // make the refcount == 3;\n        return $obj;\n    }\n}\n$a = new A;\n$a->getObj($array) //use function call to get a refcount == 1 IS_VAR object\n    ->arr // FETCH_OBJ_W will EXTRACT_ZVAL_PTR because getObj() result a refcount == 1 object (READY_TO_DESTROY)\n        [0] = \"test\"; //We will get a refcount == 3 array (not a IS_INDIRCT) in ZEND_ASSIGN_DIM_SPEC_VAR_CONST_HANDLER\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});

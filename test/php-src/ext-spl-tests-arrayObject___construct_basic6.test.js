// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject___construct_basic6.phpt
  it("SPL: ArrayObject::__construct: check impact of ArrayObject::STD_PROP_LIST on var_dump.", function () {
    expect(parser.parseCode("<?php\nclass MyArrayObject extends ArrayObject {\n    private $priv1 = 'secret1';\n    public $pub1 = 'public1';\n}\n$ao = new ArrayObject(array(1,2,3));\n$ao->p = 1;\nvar_dump($ao);\n$ao = new ArrayObject(array(1,2,3), ArrayObject::STD_PROP_LIST);\n$ao->p = 1;\nvar_dump($ao);\n$ao = new MyArrayObject(array(1,2,3));\nvar_dump($ao);\n$ao = new MyArrayObject(array(1,2,3), ArrayObject::STD_PROP_LIST);\nvar_dump($ao);\n?>")).toMatchSnapshot();
  });
});

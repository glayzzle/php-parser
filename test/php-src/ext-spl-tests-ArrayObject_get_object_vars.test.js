// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_get_object_vars.phpt
  it("get_object_vars() on ArrayObject works on the properties of the ArrayObject itself", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $test;\n    public $test2;\n}\nclass AO extends ArrayObject {\n    private $test;\n    public function getObjectVars() {\n        return get_object_vars($this);\n    }\n}\n$ao = new AO(new Test);\nvar_dump(get_object_vars($ao));\nvar_dump($ao->getObjectVars());\n?>")).toMatchSnapshot();
  });
});

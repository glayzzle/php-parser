// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_mangled_object_vars.phpt
  it("get_mangled_object_vars() function", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $pub = 1;\n    protected $prot = 2;\n    private $priv = 3;\n}\nclass B extends A {\n    private $priv = 4;\n}\n$obj = new B;\n$obj->dyn = 5;\n$obj->{\"6\"} = 6;\nvar_export(get_mangled_object_vars($obj));\necho \"\\n\";\nclass AO extends ArrayObject {\n    private $priv = 1;\n}\n$ao = new AO(['x' => 'y']);\n$ao->dyn = 2;\nvar_export(get_mangled_object_vars($ao));\necho \"\\n\";\nvar_export((array) $ao);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});

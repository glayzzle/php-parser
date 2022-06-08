// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_vars_005.phpt
  it("get_class_vars(): Testing visibility", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected $a = 1;\n    private $b = 2;\n}\nclass B extends A {\n    private $c = 3;\n    public function __construct() {\n        var_dump(get_class_vars('A'));\n        var_dump(get_class_vars('B'));\n    }\n}\nvar_dump(get_class_vars('A'));\nvar_dump(get_class_vars('B'));\nnew B;\n?>")).toMatchSnapshot();
  });
});

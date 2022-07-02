// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_vars_002.phpt
  it("get_class_vars(): Testing the scope", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a = 1;\n    private $b = 2;\n    private $c = 3;\n}\nclass B extends A {\n    static public $aa = 4;\n    static private $bb = 5;\n    static protected $cc = 6;\n}\nclass C extends B {\n    public function __construct() {\n        var_dump(get_class_vars('A'));\n        var_dump(get_class_vars('B'));\n        var_dump($this->a, $this->b, $this->c);\n    }\n}\nnew C;\n?>")).toMatchSnapshot();
  });
});

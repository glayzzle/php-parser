// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_vars_003.phpt
  it("get_class_vars(): Testing the scope", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a = 1;\n    private $b = 2;\n    private $c = 3;\n}\nclass B extends A {\n    static public $aa = 4;\n    static private $bb = 5;\n    static protected $cc = 6;\n    protected function __construct() {\n        var_dump(get_class_vars('C'));\n    }\n}\nclass C extends B {\n    public $aaa = 7;\n    private $bbb = 8;\n    protected $ccc = 9;\n    public function __construct() {\n        parent::__construct();\n    }\n}\nnew C;\n?>")).toMatchSnapshot();
  });
});

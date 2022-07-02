// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_vars_001.phpt
  it("get_class_vars(): Simple test", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a = 1;\n    private $b = 2;\n    private $c = 3;\n}\nclass B extends A {\n    static public $aa = 4;\n    static private $bb = 5;\n    static protected $cc = 6;\n}\nvar_dump(get_class_vars('A'));\nvar_dump(get_class_vars('B'));\ntry {\n    get_class_vars(\"Unknown\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

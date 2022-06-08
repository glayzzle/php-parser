// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_rec_objects.phpt
  it("array_walk_recursive() and objects", function () {
    expect(parser.parseCode("<?php\nfunction walk($key, $value) {\n    var_dump($value, $key);\n}\nclass test {\n    private $var_pri = \"test_private\";\n    protected $var_pro = \"test_protected\";\n    public $var_pub = \"test_public\";\n}\n$stdclass = new stdclass;\n$stdclass->foo = \"foo\";\n$stdclass->bar = \"bar\";\narray_walk_recursive($stdclass, \"walk\");\n$t = new test;\narray_walk_recursive($t, \"walk\");\n$var = array();\narray_walk_recursive($var, \"walk\");\n$var = \"\";\ntry {\n    array_walk_recursive($var, \"walk\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

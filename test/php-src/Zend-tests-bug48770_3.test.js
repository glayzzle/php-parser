// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48770_3.phpt
  it("Bug #48770 (call_user_func_array() fails to call parent from inheriting class)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function func($str) {\n        var_dump(__METHOD__ .': '. $str);\n    }\n    private function func2($str) {\n        var_dump(__METHOD__ .': '. $str);\n    }\n    protected function func3($str) {\n        var_dump(__METHOD__ .': '. $str);\n    }\n}\nclass B extends A {\n    public function func($str) {\n        call_user_func_array(array($this, 'self::func2'), array($str));\n        call_user_func_array(array($this, 'self::func3'), array($str));\n        try {\n            call_user_func_array(array($this, 'self::inexistent'), array($str));\n        } catch (\\TypeError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        }\n    }\n    private function func2($str) {\n        var_dump(__METHOD__ .': '. $str);\n    }\n    protected function func3($str) {\n        var_dump(__METHOD__ .': '. $str);\n    }\n}\nclass C extends B {\n    public function func($str) {\n        parent::func($str);\n    }\n}\n$c = new C;\n$c->func('This should work!');\n?>")).toMatchSnapshot();
  });
});

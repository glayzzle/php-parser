// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/030.phpt
  it("Overriding $this in catch and checking the object properties later.", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $test = 0;\n    private $test_2 = 1;\n    protected $test_3 = 2;\n    public function bar() {\n        try {\n            throw new Exception('foo');\n        } catch (Exception $this) {\n            var_dump($this);\n        }\n        $this->baz();\n    }\n    public function baz() {\n        foreach ($this as $k => $v) {\n            printf(\"'%s' => '%s'\\n\", $k, $v);\n        }\n        print \"ok\\n\";\n    }\n}\n$test = new foo;\n$test->bar();\n?>")).toMatchSnapshot();
  });
});

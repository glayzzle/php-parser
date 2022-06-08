// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/prop_types.phpt
  it("Property types in inference", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public bool $public;\n    protected int $protected;\n    private float $private;\n    public function inTest() {\n        var_dump($this->public, $this->protected, $this->private);\n    }\n    public function inTestWithTest2(Test2 $test2) {\n        var_dump($test2->public, $test2->protected, $test2->private);\n    }\n}\nclass Test2 extends Test {\n    private array $private;\n    public function inTest2() {\n        var_dump($this->public, $this->protected, $this->private);\n    }\n}\nfunction noScope(Test $test) {\n    var_dump($test->public, $test->protected, $test->private);\n}\n?>")).toMatchSnapshot();
  });
});

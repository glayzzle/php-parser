// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76047.phpt
  it("Bug #76047: Use-after-free when accessing already destructed backtrace arguments", function () {
    expect(parser.parseCode("<?php\nclass Vuln {\n    public $a;\n    public function __destruct() {\n        unset($this->a);\n        $backtrace = (new Exception)->getTrace();\n        var_dump($backtrace);\n    }\n}\nfunction test($arg) {\n    $arg = str_shuffle(str_repeat('A', 79));\n    $vuln = new Vuln();\n    $vuln->a = $arg;\n}\nfunction test2($arg) {\n    $$arg = 1; // Trigger symbol table\n    $arg = str_shuffle(str_repeat('A', 79));\n    $vuln = new Vuln();\n    $vuln->a = $arg;\n}\ntest('x');\ntest2('x');\n?>")).toMatchSnapshot();
  });
});

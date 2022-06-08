// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34310.phpt
  it("Bug #34310 (foreach($arr as $c->d => $x) crashes)", function () {
    expect(parser.parseCode("<?php\nclass C\n{\n    public $d;\n}\n$c = new C();\n$arr = array (1 => 'a', 2 => 'b', 3 => 'c');\n// Works fine:\nforeach($arr as $x => $c->d)\n{\n    echo \"{$x} => {$c->d}\\n\";\n}\n// Crashes:\nforeach($arr as $c->d => $x)\n{\n    echo \"{$c->d} => {$x}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

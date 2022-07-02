// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug21957.phpt
  it("Bug #21957 (serialize() mangles objects with __sleep)", function () {
    expect(parser.parseCode("<?php\nclass test\n{\n    public $a, $b;\n    function __construct()\n    {\n        $this->a = 7;\n        $this->b = 2;\n    }\n    function __sleep()\n    {\n        $this->b = 0;\n    }\n}\n$t['one'] = 'ABC';\n$t['two'] = new test();\nvar_dump($t);\n$s =  @serialize($t);\necho $s . \"\\n\";\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});

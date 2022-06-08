// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43450.phpt
  it("Bug #43450 (Memory leak on some functions with implicit object __toString() call)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function __toString()\n    {\n        return __CLASS__;\n    }\n}\n$num_repeats = 100000;\n$start = memory_get_usage() / 1024;\nfor ($i=1;$i<$num_repeats;$i++)\n{\n    $foo = new Foo();\n    md5($foo);\n}\n$end = memory_get_usage() / 1024;\nif ($start + 16 < $end) {\n    echo 'FAIL';\n} else {\n    echo 'PASS';\n}\n?>")).toMatchSnapshot();
  });
});

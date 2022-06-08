// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_001.phpt
  it("Testing several magic methods", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function __unset($a) {\n        print \"unset\\n\";\n        var_dump($a);\n    }\n    public function __call($a, $b) {\n        print \"call\\n\";\n        var_dump($a);\n    }\n    function __clone() {\n        print \"clone\\n\";\n    }\n    static public function __callstatic($a, $b) {\n        print \"callstatic\\n\";\n    }\n    public function __tostring() {\n        return 'foo';\n    }\n}\n$a = new foo;\n$a->sdfdsa();\n$a::test();\nclone $a;\nvar_dump((string)$a);\nunset($a->a);\n?>")).toMatchSnapshot();
  });
});

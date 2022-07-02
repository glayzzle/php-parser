// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24658.phpt
  it("Bug #24658 (combo of typehint / reference causes crash)", function () {
    expect(parser.parseCode("<?php\nclass foo {}\nfunction no_typehint($a) {\n    var_dump($a);\n}\nfunction typehint(foo $a) {\n    var_dump($a);\n}\nfunction no_typehint_ref(&$a) {\n    var_dump($a);\n}\nfunction typehint_ref(foo &$a) {\n    var_dump($a);\n}\n$v = new foo();\n$a = array(new foo(), 1, 2);\nno_typehint($v);\ntypehint($v);\nno_typehint_ref($v);\ntypehint_ref($v);\necho \"===no_typehint===\\n\";\narray_walk($a, 'no_typehint');\necho \"===no_typehint_ref===\\n\";\narray_walk($a, 'no_typehint_ref');\necho \"===typehint===\\n\";\narray_walk($a, 'typehint');\necho \"===typehint_ref===\\n\";\narray_walk($a, 'typehint_ref');\n?>")).toMatchSnapshot();
  });
});

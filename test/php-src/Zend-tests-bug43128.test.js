// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43128.phpt
  it("Bug #43128 (Very long class name causes segfault)", function () {
    expect(parser.parseCode("<?php\n$a = str_repeat(\"a\", 10 * 1024 * 1024);\neval(\"class $a {}\");\n# call_user_func($a); // Warning\n# $a->$a();           // Fatal error\nif ($a instanceof $a); // Segmentation fault\nnew $a;                // Segmentation fault\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});

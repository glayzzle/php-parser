// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/by_ref.phpt
  it("Variadic arguments with by-reference passing", function () {
    expect(parser.parseCode("<?php\nfunction test(&... $args) {\n    $i = 0;\n    foreach ($args as &$arg) {\n        $arg = $i++;\n    }\n}\ntest();\ntest($a);\nvar_dump($a);\ntest($b, $c, $d);\nvar_dump($b, $c, $d);\n?>")).toMatchSnapshot();
  });
});

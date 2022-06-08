// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/021.phpt
  it("?: operator", function () {
    expect(parser.parseCode("<?php\nvar_dump(true ?: false);\nvar_dump(false ?: true);\nvar_dump(23 ?: 42);\nvar_dump(0 ?: \"bar\");\n$a = 23;\n$b = 0;\n$c = \"\";\n$d = 23.5;\nvar_dump($a ?: $b);\nvar_dump($c ?: $d);\nvar_dump(1 ?: print(2));\n$e = array();\n$e['e'] = 'e';\n$e['e'] = $e['e'] ?: 'e';\nprint_r($e);\n?>")).toMatchSnapshot();
  });
});

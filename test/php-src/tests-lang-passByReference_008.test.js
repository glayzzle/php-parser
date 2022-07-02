// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_008.phpt
  it("Pass same variable by ref and by value.", function () {
    expect(parser.parseCode("<?php\nfunction valRef($x, &$y) {\n    var_dump($x, $y);\n    $x = 'changed.x';\n    $y = 'changed.y';\n}\nfunction refVal(&$x, $y) {\n    var_dump($x, $y);\n    $x = 'changed.x';\n    $y = 'changed.y';\n}\necho \"\\n\\n-- Val, Ref --\\n\";\n$a = 'original.a';\nvalRef($a, $a);\nvar_dump($a);\necho \"\\n\\n-- Ref, Val --\\n\";\n$b = 'original.b';\nrefVal($b, $b);\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});

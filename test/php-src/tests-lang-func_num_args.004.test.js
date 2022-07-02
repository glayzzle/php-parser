// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_num_args.004.phpt
  it("Pass same variable by ref and by value.", function () {
    expect(parser.parseCode("<?php\nfunction valRef($x, &$y) {\n    var_dump($x, $y);\n    var_dump(func_num_args());\n    $x = 'changed.x';\n    $y = 'changed.y';\n    var_dump(func_num_args());\n}\nfunction refVal(&$x, $y) {\n    var_dump($x, $y);\n    var_dump(func_num_args());\n    $x = 'changed.x';\n    $y = 'changed.y';\n    var_dump(func_num_args());\n}\necho \"\\n\\n-- Val, Ref --\\n\";\n$a = 'original.a';\nvalRef($a, $a);\nvar_dump($a);\necho \"\\n\\n-- Ref, Val --\\n\";\n$b = 'original.b';\nrefVal($b, $b);\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});

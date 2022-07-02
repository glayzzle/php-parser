// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug22592.phpt
  it("Bug #22592 (cascading assignments to strings with curly braces broken)", function () {
    expect(parser.parseCode("<?php\nfunction error_hdlr($errno, $errstr) {\n    echo \"[$errstr]\\n\";\n}\nset_error_handler('error_hdlr');\n$i = 4;\n$s = \"string\";\n$result = \"* *-*\";\nvar_dump($result);\n$result[6] = '*';\nvar_dump($result);\n$result[1] = $i;\nvar_dump($result);\n$result[3] = $s;\nvar_dump($result);\n$result[7] = 0;\nvar_dump($result);\n$a = $result[1] = $result[3] = '-';\nvar_dump($result);\n$b = $result[3] = $result[5] = $s;\nvar_dump($result);\n$c = $result[0] = $result[2] = $result[4] = $i;\nvar_dump($result);\n$d = $result[6] = $result[8] = 5;\nvar_dump($result);\n$e = $result[1] = $result[6];\nvar_dump($result);\nvar_dump($a, $b, $c, $d, $e);\n$result[0] = $result[-4] = $result[-1] = 'a';\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40809.phpt
  it("Bug #40809 (Poor performance of \".=\")", function () {
    expect(parser.parseCode("<?php\n$num_increments = 100;\n$num_repeats = 1000;\n$increment = 50;\n/* Create some more holes to give the memory allocator something to\n * work with. */\n$num = 5000;\n$a = Array();\nfor ($i=0; $i<$num; $i++) {\n  $a[$i] = Array(1);\n}\nfor ($i=0; $i<$num; $i++) {\n  $b[$i] = $a[$i][0];\n}\nunset($a);\nfor ($i=0;$i<$num_repeats;$i++) {\n  $evil = \"\";\n  for ($j=0;$j<$num_increments;$j++) {\n    $evil .= str_repeat(\"a\", $increment);\n  }\n  unset($evil);\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});

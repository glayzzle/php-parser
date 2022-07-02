// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40261.phpt
  it("Bug #40261 (Extremely slow data handling due to memory fragmentation)", function () {
    expect(parser.parseCode("<?php\n$num = 100000;\n$a = Array();\nfor ($i=0; $i<$num; $i++) {\n  $a[$i] = Array(1);\n}\nfor ($i=0; $i<$num; $i++) {\n  $b[$i] = $a[$i][0];\n}\nunset($a);\nfor ($i=0; $i<$num; $i++) {\n  $b[$i] = \"12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});

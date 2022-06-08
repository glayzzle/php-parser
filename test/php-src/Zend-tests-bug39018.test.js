// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39018.phpt
  it("Bug #39018 (Error control operator '@' fails to suppress \"Uninitialized string offset\")", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$a = 'foo';\n$a[111111111111111111111];\n$a = '';\n$a[0];\nprint $a[0]; // 12\n$a[-11111111111111111111111];\nprint $a[-11111111111111111111111]; // 16\n$a[-0];\n$x = 'test';\n@$x[4];\n@$y = $x[4];\n@('a' == $x[4]);\n$x[4] == 'a'; // 28\n@$x[4] == 'a';\n(@$x[4]) == 'a';\n($x[4]) == 'a'; // 34\n(@($x[4])) == 'a';\n(($x[4])) == 'a'; // 38\n@($x[4]) == 'a';\n($x[4]) == 'a'; // 42\n@($x[4] == 'a');\n($x[4] == 'a'); // 46\n$y = 'foobar';\n$y[12.2];\nprint $y[12.2]; // 52\n$y[3.5];\nprint $y[3.5]; // 56\nprint \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/015b.phpt
  it("Phar::mapPhar valid file (bzip2)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = array('cont'=>'Hello World', 'comp'=>pack('H*', '425a6834314159265359065c89da0000009780400000400080060490002000310c082031a916c41d41e2ee48a70a1200cb913b40'),'flags'=>0x00002000);\ninclude 'files/phar_test.inc';\nvar_dump(file_get_contents($pname . '/a'));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/016.phpt
  it("Phar::mapPhar invalid file (gzipped file length is too short)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n// file length is too short\n$files = array();\n// \"hi\" gzdeflated\n$files['a'] = array('cont'=>'a','comp'=> pack('H*', 'cbc80400'),'flags'=>0x00001000, 'ulen' => 1, 'clen' => 4);\n$files['b'] = $files['a'];\n$files['c'] = array('cont'=>'*');\n$files['d'] = $files['a'];\ninclude 'files/phar_test.inc';\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump(file_get_contents($pname . '/d'));\n?>")).toMatchSnapshot();
  });
});

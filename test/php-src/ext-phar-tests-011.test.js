// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/011.phpt
  it("Phar::mapPhar filesize too small in manifest", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n// compressed file length does not match incompressed length for an uncompressed file\n$files = array();\n$files['a'] = array('cont'=>'a','ulen'=>1,'clen'=>2);\ninclude 'files/phar_test.inc';\ntry {\ninclude $fname;\necho file_get_contents('phar://hio/a');\n} catch (Exception $e) {\necho $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});

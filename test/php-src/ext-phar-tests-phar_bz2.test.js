// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_bz2.phpt
  it("Phar: bzipped phar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/phar_bz2.phar';\n$pname = 'phar://' . $fname;\n$fname2 = __DIR__ . '/phar_bz2.2.phar';\n$pname2 = 'phar://' . $fname2;\n$file = '<?php\nPhar::mapPhar();\nvar_dump(\"it worked\");\ninclude \"phar://\" . __FILE__ . \"/tar_004.php\";\n__HALT_COMPILER();';\n$files = array();\n$files['tar_004.php']   = '<?php var_dump(__FILE__);';\n$files['internal/file/here']   = \"hi there!\\n\";\n$files['internal/dir/'] = '';\n$files['dir/'] = '';\n$bz2 = true;\ninclude 'files/phar_test.inc';\ninclude $fname;\n$a = new Phar($fname);\n$a['test'] = 'hi';\ncopy($fname, $fname2);\n$a->setAlias('another');\n$b = new Phar($fname2);\nvar_dump($b->isFileFormat(Phar::PHAR));\nvar_dump($b->isCompressed() == Phar::BZ2);\n// additional code coverage\ntry {\n$b->isFileFormat(25);\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

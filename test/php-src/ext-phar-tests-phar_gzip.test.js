// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_gzip.phpt
  it("Phar: gzipped phar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/phar_gzip.phar';\n$pname = 'phar://' . $fname;\n$fname2 = __DIR__ . '/phar_gzip.2.phar';\n$pname2 = 'phar://' . $fname2;\n$file = '<?php\nPhar::mapPhar();\nvar_dump(\"it worked\");\ninclude \"phar://\" . __FILE__ . \"/tar_004.php\";\n__HALT_COMPILER();';\n$files = array();\n$files['tar_004.php']   = '<?php var_dump(__FILE__);';\n$files['internal/file/here']   = \"hi there!\\n\";\n$files['internal/dir/'] = '';\n$files['dir/'] = '';\n$gzip = true;\ninclude 'files/phar_test.inc';\ninclude $fname;\n$a = new Phar($fname);\n$a['test'] = 'hi';\ncopy($fname, $fname2);\n$a->setAlias('another');\n$b = new Phar($fname2);\nvar_dump($b->isFileFormat(Phar::PHAR));\nvar_dump($b->isCompressed() == Phar::GZ);\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_convert_tar3.phpt
  it("Phar::convertToTar() bz2 compressed", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$fname3 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.tar';\n$stub = '<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>';\n$file = $stub;\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\nvar_dump($phar->isFileFormat(Phar::TAR));\nvar_dump($phar->isCompressed());\nvar_dump($phar->getStub());\n$phar = $phar->convertToExecutable(Phar::TAR, Phar::BZ2);\nvar_dump($phar->isFileFormat(Phar::TAR));\nvar_dump($phar->isCompressed());\nvar_dump($phar->getStub());\ncopy($fname2 . '.bz2', $fname3);\n$phar = new Phar($fname3);\nvar_dump($phar->isFileFormat(Phar::TAR));\nvar_dump($phar->isCompressed() == Phar::BZ2);\nvar_dump($phar->getStub());\n?>")).toMatchSnapshot();
  });
});

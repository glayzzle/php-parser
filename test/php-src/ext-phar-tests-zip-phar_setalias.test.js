// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_setalias.phpt
  it("Phar::setAlias() zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '2.phar.zip';\n$fname3 = __DIR__ . '/' . basename(__FILE__, '.php') . '3.phar.zip';\n$phar = new Phar($fname);\n$phar->setStub('<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>');\n$phar->setAlias('hio');\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\nforeach ($files as $n => $file) {\n    $phar[$n] = $file;\n}\n$phar->stopBuffering();\necho $phar->getAlias() . \"\\n\";\n$phar->setAlias('test');\necho $phar->getAlias() . \"\\n\";\n// test compression\n$phar->compressFiles(Phar::GZ);\ncopy($fname, $fname2);\n$phar->setAlias('unused');\n$p2 = new Phar($fname2);\necho $p2->getAlias(), \"\\n\";\n$p2->compressFiles(Phar::BZ2);\ncopy($fname2, $fname3);\n$p2->setAlias('unused2');\n$p3 = new Phar($fname3);\necho $p3->getAlias(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});

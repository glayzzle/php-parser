// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/phar_setalias.phpt
  it("Phar::setAlias() tar-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '2.phar.tar';\n$phar = new Phar($fname);\n$phar->setStub('<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>');\n$phar->setAlias('hio');\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\nforeach ($files as $n => $file) {\n    $phar[$n] = $file;\n}\n$phar->stopBuffering();\necho $phar->getAlias() . \"\\n\";\n$phar->setAlias('test');\necho $phar->getAlias() . \"\\n\";\ncopy($fname, $fname2);\n$phar->setAlias('unused');\n$a = new Phar($fname2);\necho $a->getAlias() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});

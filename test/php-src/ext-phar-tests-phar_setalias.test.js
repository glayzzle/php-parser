// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_setalias.phpt
  it("Phar::setAlias()", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = '<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>';\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\necho $phar->getAlias() . \"\\n\";\n$phar->setAlias('test');\necho $phar->getAlias() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_stub_write.phpt
  it("Phar::setStub()/getStub()", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$stub = '<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>';\n$file = $stub;\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\nvar_dump($stub);\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n$stub = '<?php echo \"second stub\\n\"; __HALT_COMPILER(); ?>';\n$sexp = $stub . \"\\r\\n\";\n$phar->setStub($stub);\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\nvar_dump($phar->getStub() == $sexp);\n$phar->stopBuffering();\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\nvar_dump($phar->getStub() == $sexp);\n$phar = new Phar($fname);\nvar_dump($phar->getStub() == $stub);\nvar_dump($phar->getStub() == $sexp);\n?>")).toMatchSnapshot();
  });
});

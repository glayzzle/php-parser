// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_stub_error.phpt
  it("Phar::setStub()/getStub()", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$stub = '<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>';\n$file = $stub;\n$files = array();\n$files['a'] = 'a';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\nvar_dump($stub);\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n$newstub = '<?php echo \"second stub\\n\"; _x_HALT_COMPILER(); ?>';\ntry\n{\n    $phar->setStub($newstub);\n}\ncatch(exception $e)\n{\n    echo 'Exception: ' . $e->getMessage() . \"\\n\";\n}\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n$phar->stopBuffering();\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n?>")).toMatchSnapshot();
  });
});

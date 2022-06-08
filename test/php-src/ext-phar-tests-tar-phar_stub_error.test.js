// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/phar_stub_error.phpt
  it("Phar::setStub()/getStub() tar-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$phar = new Phar($fname);\n$stub = '<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>' .\"\\r\\n\";\n$phar->setStub($stub);\n$phar->setAlias('hio');\n$phar['a'] = 'a';\n$phar->stopBuffering();\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n$newstub = '<?php echo \"second stub\\n\"; _x_HALT_COMPILER(); ?>';\ntry {\n    $phar->setStub($newstub);\n} catch(exception $e) {\n    echo 'Exception: ' . $e->getMessage() . \"\\n\";\n}\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n$phar->stopBuffering();\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n?>")).toMatchSnapshot();
  });
});

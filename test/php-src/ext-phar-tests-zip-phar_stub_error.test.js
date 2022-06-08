// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_stub_error.phpt
  it("Phar::setStub()/getStub() zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$phar = new Phar($fname);\n$phar->setStub($stub = '<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>' . \"\\r\\n\");\n$phar->setAlias('hio');\n$phar['a'] = 'a';\n$phar->stopBuffering();\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n$newstub = '<?php echo \"second stub\\n\"; _x_HALT_COMPILER(); ?>';\ntry\n{\n    $phar->setStub($newstub);\n}\ncatch(exception $e)\n{\n    echo 'Exception: ' . $e->getMessage() . \"\\n\";\n}\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n$phar->stopBuffering();\nvar_dump($phar->getStub());\nvar_dump($phar->getStub() == $stub);\n?>")).toMatchSnapshot();
  });
});

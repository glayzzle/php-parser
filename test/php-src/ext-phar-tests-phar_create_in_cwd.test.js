// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_create_in_cwd.phpt
  it("Phar: attempt to create a Phar with relative path", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\ntry {\n    $p = new Phar('phar_create_in_cwd.phar');\n    $p['file1.txt'] = 'hi';\n    var_dump(strlen($p->getStub()));\n    $p->setStub(\"<?php\nspl_autoload_register(function(\\$class) {\n    include 'phar://' . str_replace('_', '/', \\$class);\n});\nPhar::mapPhar('phar_create_in_cwd.phar');\ninclude 'phar://phar_create_in_cwd.phar/startup.php';\n__HALT_COMPILER();\n?>\");\n    var_dump($p->getStub());\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_commitwrite.phpt
  it("Phar::setStub()/stopBuffering()", function () {
    expect(parser.parseCode("<?php\n$p = new Phar(__DIR__ . '/phar_commitwrite.phar', 0, 'phar_commitwrite.phar');\n$p['file1.txt'] = 'hi';\n$p->stopBuffering();\nvar_dump(strlen($p->getStub()));\n$p->setStub(\"<?php\nspl_autoload_register(function(\\$class) {\n    include 'phar://' . str_replace('_', '/', \\$class);\n});\nPhar::mapPhar('phar_commitwrite.phar');\ninclude 'phar://phar_commitwrite.phar/startup.php';\n__HALT_COMPILER();\n?>\");\nvar_dump($p->getStub());\n?>")).toMatchSnapshot();
  });
});

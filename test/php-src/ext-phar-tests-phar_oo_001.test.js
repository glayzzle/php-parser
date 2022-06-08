// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_001.phpt
  it("Phar object: basics", function () {
    expect(parser.parseCode("<?php\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\nvar_dump($phar->getVersion());\nvar_dump(count($phar));\nclass MyPhar extends Phar\n{\n    function __construct()\n    {\n    }\n}\ntry\n{\n    $phar = new MyPhar();\n    var_dump($phar->getVersion());\n}\ncatch (LogicException $e)\n{\n    var_dump($e->getMessage());\n}\ntry {\n    $phar = new Phar('test.phar');\n    $phar->__construct('oops');\n} catch (LogicException $e)\n{\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});

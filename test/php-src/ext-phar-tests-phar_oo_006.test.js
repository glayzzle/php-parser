// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_006.phpt
  it("Phar object: array access", function () {
    expect(parser.parseCode("<?php\nrequire_once 'files/phar_oo_test.inc';\nclass MyFile extends SplFileObject\n{\n    function __construct($what)\n    {\n        echo __METHOD__ . \"($what)\\n\";\n        parent::__construct($what);\n    }\n}\n$phar = new Phar($fname);\ntry\n{\n    $phar->setFileClass('SplFileInfo');\n}\ncatch (TypeError $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n$phar->setInfoClass('MyFile');\necho $phar['a.php']->getFilename() . \"\\n\";\necho $phar['b/c.php']->getFilename() . \"\\n\";\necho $phar['b.php']->getFilename() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});

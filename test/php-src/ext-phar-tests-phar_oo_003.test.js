// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_003.phpt
  it("Phar object: entry & openFile()", function () {
    expect(parser.parseCode("<?php\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\n$phar->setInfoClass();\nforeach($phar as $name => $ent)\n{\n    var_dump($ent->getFilename());\n    if ($ent->isDir()) {\n        var_dump('DIR');\n    } else {\n        var_dump($ent->openFile()->fgets());\n        include $ent->getPathName();\n    }\n}\n?>")).toMatchSnapshot();
  });
});

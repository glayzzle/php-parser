// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_007.phpt
  it("Phar object: access through SplFileObject", function () {
    expect(parser.parseCode("<?php\nrequire_once 'files/phar_oo_test.inc';\nclass MyFile extends SplFileObject\n{\n    function __construct($name)\n    {\n        echo __METHOD__ . \"(\" . str_replace(str_replace('\\\\', '/', __DIR__), '*', $name) . \")\\n\";\n        parent::__construct($name);\n    }\n}\n$phar = new Phar($fname);\n$phar->setInfoClass('MyFile');\n$f = $phar['a.php'];\n$s = $f->fstat();\nvar_dump($s['atime']);\nvar_dump($s['ctime']);\nvar_dump($s['mtime']);\nvar_dump($f->ftell());\nvar_dump($f->eof());\nvar_dump($f->fgets());\nvar_dump($f->eof());\nvar_dump($f->fseek(20));\nvar_dump($f->ftell());\nvar_dump($f->fgets());\nvar_dump($f->rewind());\nvar_dump($f->ftell());\nvar_dump($f->fgets());\nvar_dump($f->ftell());\n?>\n===AGAIN===\n<?php\n$f = $phar['a.php'];\nvar_dump($f->ftell());\nvar_dump($f->eof());\nvar_dump($f->fgets());\nvar_dump($f->eof());\n//unset($f); without unset we check for working refcounting\n?>")).toMatchSnapshot();
  });
});

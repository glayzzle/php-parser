// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_002.phpt
  it("Phar object: iterator & entries", function () {
    expect(parser.parseCode("<?php\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\n$phar->setInfoClass('SplFileInfo');\nforeach($phar as $name => $ent)\n{\n    var_dump(str_replace(str_replace('\\\\', '/', __DIR__), '*', $name));\n    var_dump($ent->getFilename());\n    var_dump($ent->getSize());\n    var_dump($ent->getType());\n    var_dump($ent->isWritable());\n    var_dump($ent->isReadable());\n    var_dump($ent->isExecutable());\n    var_dump($ent->isFile());\n    var_dump($ent->isDir());\n    var_dump($ent->isLink());\n    var_dump($ent->getCTime());\n    var_dump($ent->getMTime());\n    var_dump($ent->getATime());\n}\necho \"==RECURSIVE==\\n\";\n$phar = new Phar($fname);\nforeach(new RecursiveIteratorIterator($phar) as $name => $ent)\n{\n    var_dump(str_replace(str_replace('\\\\', '/', __DIR__), '*', $name));\n    var_dump(str_replace('\\\\', '/', $ent->getFilename()));\n    var_dump($ent->getCompressedSize());\n    var_dump($ent->isCRCChecked());\n    var_dump($ent->isCRCChecked() ? $ent->getCRC32() : NULL);\n    var_dump($ent->getPharFlags());\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_004.phpt
  it("Phar and DirectoryIterator", function () {
    expect(parser.parseCode("<?php\nrequire_once 'files/phar_oo_test.inc';\n$it = new DirectoryIterator('phar://'.$fname);\nforeach($it as $name => $ent)\n{\n    var_dump($name);\n    var_dump($ent->getFilename());\n    var_dump($ent->isDir());\n    var_dump($ent->isDot());\n}\n?>\n===MANUAL===\n<?php\nclass MyDirectoryIterator extends DirectoryIterator\n{\n    function __construct($dir)\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::__construct($dir);\n    }\n    function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::rewind();\n    }\n    function valid(): bool\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::valid();\n    }\n    function key(): mixed\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::key();\n    }\n    function current(): mixed\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::current();\n    }\n    function next(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::next();\n    }\n}\n$it = new MyDirectoryIterator('phar://'.$fname);\nforeach($it as $name => $ent)\n{\n    var_dump($name);\n    var_dump($ent->getFilename());\n}\n?>")).toMatchSnapshot();
  });
});

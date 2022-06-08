// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_convert_phar.phpt
  it("Phar::convertToPhar() from zip", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '2.phar';\n$fname3 = __DIR__ . '/' . basename(__FILE__, '.php') . '.3.phar';\n$phar = new Phar($fname);\n$phar['a.txt'] = 'some text';\n$phar->stopBuffering();\nvar_dump($phar->isFileFormat(Phar::ZIP));\nvar_dump(strlen($phar->getStub()));\n$phar = $phar->convertToExecutable(Phar::ZIP);\nvar_dump($phar->isFileFormat(Phar::ZIP));\nvar_dump($phar->getStub());\n$phar['a'] = 'hi there';\n$phar = $phar->convertToExecutable(Phar::PHAR, Phar::NONE, '.3.phar');\nvar_dump($phar->isFileFormat(Phar::PHAR));\nvar_dump(strlen($phar->getStub()));\ncopy($fname3, $fname2);\n$phar = new Phar($fname2);\nvar_dump($phar->isFileFormat(Phar::PHAR));\nvar_dump(strlen($phar->getStub()));\n?>")).toMatchSnapshot();
  });
});

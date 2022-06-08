// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/phar_convert_phar4.phpt
  it("Phar::convertToPhar() with global metadata", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '2.phar';\n$phar = new Phar($fname);\n$phar['a.txt'] = 'some text';\n$phar->setMetadata('hi');\n$phar->stopBuffering();\nvar_dump($phar->isFileFormat(Phar::TAR));\nvar_dump(strlen($phar->getStub()));\nvar_dump($phar->getMetadata());\n$phar = $phar->convertToExecutable(Phar::TAR);\nvar_dump($phar->isFileFormat(Phar::TAR));\nvar_dump($phar->getStub());\nvar_dump($phar->getMetadata());\n$phar['a'] = 'hi there';\n$phar = $phar->convertToExecutable(Phar::PHAR, Phar::GZ);\nvar_dump($phar->isFileFormat(Phar::PHAR));\nvar_dump($phar->isCompressed());\nvar_dump(strlen($phar->getStub()));\nvar_dump($phar->getMetadata());\ncopy($fname . '.gz', $fname2);\n$phar = new Phar($fname2);\nvar_dump($phar->isFileFormat(Phar::PHAR));\nvar_dump($phar->isCompressed() == Phar::GZ);\nvar_dump(strlen($phar->getStub()));\nvar_dump($phar->getMetadata());\n?>")).toMatchSnapshot();
  });
});

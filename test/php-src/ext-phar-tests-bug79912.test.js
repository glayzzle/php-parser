// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug79912.phpt
  it("Bug #79912 (Phar::decompressFiles not working)", function () {
    expect(parser.parseCode("<?php\n$phar = new Phar(__DIR__ . \"/bug79912.phar\");\n$phar->addFromString(\"test.txt\", \"This is a test file.This is a test file.This is a test file.\");\n$file = $phar[\"test.txt\"];\nvar_dump($file->compress(Phar::GZ)); //true (success)\nvar_dump($file->getContent());\nvar_dump($file->isCompressed()); //true (the file is compressed)\nvar_dump($phar->decompressFiles()); //true (success)\nvar_dump($file->isCompressed()); //false (the file should not be compressed anymore)\nvar_dump($phar->extractTo(__DIR__ . \"/bug79912\")); //true\nvar_dump(file_get_contents(__DIR__ . \"/bug79912/test.txt\")); //the extracted file in the folder should be decompressed\n?>")).toMatchSnapshot();
  });
});

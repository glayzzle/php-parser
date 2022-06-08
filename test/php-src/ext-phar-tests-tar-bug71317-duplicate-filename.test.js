// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/bug71317-duplicate-filename.phpt
  it("Bug #71317: regression in opening tar based phar files", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$testDirectory = __DIR__ . '/files/test_bug71317';\n$testTarFilename  = __DIR__ . '/files/test_bug71317.tar';\n$tar = new tarmaker($testTarFilename, 'none');\n$tar->init();\n$tar->addFile('file1.txt', 'file1');\n$tar->addFile('file2.txt', 'file2');\n$tar->addFile('file3.txt', 'file3');\n$tar->addFile('file4.txt', 'file4');\n$tar->addFile('file5.txt', 'file5');\n$tar->addFile('file2.txt', 'file2a');\n$tar->close();\n$fname = str_replace('\\\\', '/', $testTarFilename);\ntry {\n    mkdir($testDirectory);\n    $tar = new PharData($fname);\n    $tar->extractTo($testDirectory);\n    $fileContent = file_get_contents($testDirectory . '/file2.txt');\n    $expectedContent = 'file2a';\n    if ($fileContent !== $expectedContent) {\n        throw new Exception(sprintf('Contents of file2.txt (\"%s\") is invalid, expected \"%s\"', $fileContent, $expectedContent));\n    }\n} catch(Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});

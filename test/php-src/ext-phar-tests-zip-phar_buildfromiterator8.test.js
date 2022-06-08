// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_buildfromiterator8.phpt
  it("Phar::buildFromIterator() iterator, SplFileInfo as current zip-based", function () {
    expect(parser.parseCode("<?php\ntry {\n    chdir(__DIR__);\n    $phar = new Phar(__DIR__ . '/buildfromiterator.phar.zip');\n    $a = $phar->buildFromIterator(new RegexIterator(new DirectoryIterator('.'), '/^frontcontroller\\d{0,2}\\.phar\\.phpt\\\\z|^\\.\\\\z|^\\.\\.\\\\z/'), __DIR__ . DIRECTORY_SEPARATOR);\n    asort($a);\n    var_dump($a);\n    var_dump($phar->isFileFormat(Phar::ZIP));\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

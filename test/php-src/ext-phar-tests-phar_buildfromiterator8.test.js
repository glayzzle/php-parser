// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_buildfromiterator8.phpt
  it("Phar::buildFromIterator() RegexIterator(DirectoryIterator), SplFileInfo as current", function () {
    expect(parser.parseCode("<?php\ntry {\n    chdir(__DIR__);\n    $phar = new Phar(__DIR__ . '/buildfromiterator8.phar');\n    $a = $phar->buildFromIterator(new RegexIterator(new DirectoryIterator('.'), '/^\\d{0,3}\\.phpt\\\\z|^\\.\\\\z|^\\.\\.\\\\z/'), __DIR__ . DIRECTORY_SEPARATOR);\n    asort($a);\n    var_dump($a);\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

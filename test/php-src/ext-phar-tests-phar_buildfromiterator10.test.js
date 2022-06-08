// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_buildfromiterator10.phpt
  it("Phar::buildFromIterator() RegexIterator(RecursiveIteratorIterator), SplFileInfo as current", function () {
    expect(parser.parseCode("<?php\ntry {\n    chdir(__DIR__);\n    $phar = new Phar(__DIR__ . '/buildfromiterator10.phar');\n    $dir = new RecursiveDirectoryIterator('.');\n    $iter = new RecursiveIteratorIterator($dir);\n    $a = $phar->buildFromIterator(new RegexIterator($iter, '/_\\d{3}\\.phpt$/'), __DIR__ . DIRECTORY_SEPARATOR);\n    asort($a);\n    var_dump($a);\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

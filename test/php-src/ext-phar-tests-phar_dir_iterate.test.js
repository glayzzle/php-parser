// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_dir_iterate.phpt
  it("Phar object: iterate test with sub-directories and RecursiveIteratorIterator", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$phar = new Phar($fname);\n$phar['top.txt'] = 'hi';\n$phar['sub/top.txt'] = 'there';\n$phar['another.file.txt'] = 'wowee';\n$newphar = new Phar($fname);\nforeach (new RecursiveIteratorIterator($newphar) as $path => $obj) {\n    var_dump($obj->getPathName());\n}\n?>")).toMatchSnapshot();
  });
});

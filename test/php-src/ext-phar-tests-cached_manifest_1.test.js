// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/cached_manifest_1.phpt
  it("Phar: phar.cache_list basic read test", function () {
    expect(parser.parseCode("<?php\n$pname = 'phar://' . dirname(__FILE__) . '/files/nophar.phar';\nvar_dump(file_get_contents($pname . '/b/c.php'));\n$a = opendir($pname);\nwhile (false !== ($b = readdir($a))) {\nvar_dump($b);\n}\nforeach (new RecursiveIteratorIterator(new Phar($pname)) as $f) {\n    var_dump($f->getPathName());\n}\nvar_dump(is_dir($pname . '/b'));\nvar_dump(is_dir($pname . '/d'));\nvar_dump(is_dir($pname . '/b/c.php'));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_compressed_002b.phpt
  it("Phar: context/compress=BZip2", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = '<?php __HALT_COMPILER(); ?>';\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed());\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed());\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed());\n$context = stream_context_create(array('phar'=>array('compress'=>Phar::BZ2)));\nfile_put_contents($pname . '/b', 'new b');\nfile_put_contents($pname . '/c', 'new c', 0, $context);\nfile_put_contents($pname . '/d', 'new d');\nfile_put_contents($pname . '/e', 'new e', 0, $context);\n$phar = new Phar($fname);\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed());\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed());\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed());\nvar_dump(file_get_contents($pname . '/d'));\nvar_dump($phar['d']->isCompressed());\nvar_dump(file_get_contents($pname . '/e'));\nvar_dump($phar['e']->isCompressed());\n?>")).toMatchSnapshot();
  });
});

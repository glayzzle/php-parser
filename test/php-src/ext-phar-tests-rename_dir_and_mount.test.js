// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/rename_dir_and_mount.phpt
  it("Phar: rename_dir and mount test", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$files = array();\n$files['a/x'] = 'a';\n$files['a/b/x'] = 'a';\ninclude 'files/phar_test.inc';\ninclude $fname;\nPhar::mount(\"$pname/a/c\", __DIR__);\nvar_dump(file_exists($pname . '/a'));\nvar_dump(file_exists($pname . '/a/x'));\nvar_dump(file_exists($pname . '/a/b'));\nvar_dump(file_exists($pname . '/a/b/x'));\nvar_dump(file_exists($pname . '/a/c'));\nvar_dump(file_exists($pname . '/a/c/'.basename(__FILE__)));\nrename($pname . '/a', $pname . '/b');\nclearstatcache();\nvar_dump(file_exists($pname . '/a'));\nvar_dump(file_exists($pname . '/a/x'));\nvar_dump(file_exists($pname . '/a/b'));\nvar_dump(file_exists($pname . '/a/b/x'));\nvar_dump(file_exists($pname . '/a/c'));\nvar_dump(file_exists($pname . '/a/c/'.basename(__FILE__)));\nvar_dump(file_exists($pname . '/b'));\nvar_dump(file_exists($pname . '/b/x'));\nvar_dump(file_exists($pname . '/b/b'));\nvar_dump(file_exists($pname . '/b/b/x'));\nvar_dump(file_exists($pname . '/b/c'));\nvar_dump(file_exists($pname . '/b/c/'.basename(__FILE__)));\n?>")).toMatchSnapshot();
  });
});

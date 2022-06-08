// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_gobyebye.phpt
  it("Phar: test edge cases of intercepted functions when the underlying phar archive has been unlinkArchive()d", function () {
    expect(parser.parseCode("<?php\nPhar::interceptFileFuncs();\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.php';\n$pname = 'phar://' . $fname;\nfile_put_contents($fname2, '<?php Phar::unlinkArchive(\"' . addslashes($fname) . '\");');\nfile_put_contents($pname . '/foo/hi', '<?php\ninclude \"' . addslashes($fname2) . '\";\nreadfile(\"foo/hi\");\nfopen(\"foo/hi\", \"r\");\necho file_get_contents(\"foo/hi\");\nvar_dump(is_file(\"foo/hi\"),is_link(\"foo/hi\"),is_dir(\"foo/hi\"),file_exists(\"foo/hi\"),stat(\"foo/hi\"));\nopendir(\"foo/hi\");\n?>\n');\ninclude $pname . '/foo/hi';\n?>")).toMatchSnapshot();
  });
});

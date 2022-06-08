// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/readfile_edgecases.phpt
  it("Phar: test edge cases of readfile() function interception", function () {
    expect(parser.parseCode("<?php\nPhar::interceptFileFuncs();\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\nchdir(__DIR__);\nfile_put_contents($fname, \"blah\\n\");\nfile_put_contents(\"readfile_edgecases.txt\", \"test\\n\");\nreadfile($fname);\nunlink($fname);\nmkdir($pname . '/oops');\nfile_put_contents($pname . '/foo/hi', '<?php\nreadfile(\"foo/\" . basename(__FILE__));\n$context = stream_context_create();\nreadfile(\"readfile_edgecases.txt\");\nset_include_path(\"' . addslashes(__DIR__) . '\");\nreadfile(\"readfile_edgecases.txt\", true);\nreadfile(\"./hi\", 0, $context);\nreadfile(\"../oops\");\n?>\n');\ninclude $pname . '/foo/hi';\n?>")).toMatchSnapshot();
  });
});

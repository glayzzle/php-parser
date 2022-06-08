// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/fopen_edgecases2.phpt
  it("Phar: test edge cases of fopen() function interception #2", function () {
    expect(parser.parseCode("<?php\nPhar::interceptFileFuncs();\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\ntry {\n    fopen(array(), 'r');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nchdir(__DIR__);\nfile_put_contents($fname, \"blah\\n\");\nfile_put_contents(\"fopen_edgecases2.txt\", \"test\\n\");\n$a = fopen($fname, 'rb');\necho fread($a, 1000);\nfclose($a);\nunlink($fname);\nmkdir($pname . '/oops');\nfile_put_contents($pname . '/foo/hi', '<?php\n$context = stream_context_create();\n$a = fopen(\"fopen_edgecases2.txt\", \"rb\", false, $context);\necho fread($a, 1000);\nfclose($a);\nfopen(\"../oops\", \"r\");\n?>\n');\ninclude $pname . '/foo/hi';\n?>")).toMatchSnapshot();
  });
});

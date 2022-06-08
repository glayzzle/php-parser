// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/fgc_edgecases.phpt
  it("Phar: test edge cases of file_get_contents() function interception", function () {
    expect(parser.parseCode("<?php\nPhar::interceptFileFuncs();\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\ntry {\n    file_get_contents(array());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nchdir(__DIR__);\nfile_put_contents($fname, \"blah\\n\");\nfile_put_contents(\"fgc_edgecases.txt\", \"test\\n\");\necho file_get_contents($fname);\nunlink($fname);\nmkdir($pname . '/oops');\nfile_put_contents($pname . '/foo/hi', '<?php\necho file_get_contents(\"foo/\" . basename(__FILE__));\n$context = stream_context_create();\ntry {\n    file_get_contents(\"./hi\", 0, $context, 0, -1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho file_get_contents(\"fgc_edgecases.txt\");\nset_include_path(\"' . addslashes(__DIR__) . '\");\necho file_get_contents(\"fgc_edgecases.txt\", true);\necho file_get_contents(\"./hi\", 0, $context);\necho file_get_contents(\"../oops\");\necho file_get_contents(\"./hi\", 0, $context, 50000);\necho file_get_contents(\"./hi\");\necho file_get_contents(\"./hi\", 0, $context, 0, 0);\n?>\n');\ninclude $pname . '/foo/hi';\n?>")).toMatchSnapshot();
  });
});

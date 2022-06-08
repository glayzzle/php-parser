// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug71624.phpt
  it("Bug #61977 Test that -R properly sets argi and argn", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$filename_txt = __DIR__ . DIRECTORY_SEPARATOR . \"bug71624.test.txt\";\n$txt = 'foo\ntest\nhello\n';\nfile_put_contents($filename_txt, $txt);\n$test_args = ['$argi', '$argn'];\nforeach ($test_args as $test_arg) {\n    if (substr(PHP_OS, 0, 3) == 'WIN') {\n        var_dump(`type \"$filename_txt\" | \"$php\" -n -R \"echo $test_arg . PHP_EOL;\"`);\n    } else {\n        var_dump(`cat \"$filename_txt\" | \"$php\" -n -R 'echo $test_arg . PHP_EOL;'`);\n    }\n}\n@unlink($filename_txt);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

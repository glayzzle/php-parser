// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/bug77812-libedit.phpt
  it("Bug #77812 (Interactive mode does not support PHP 7.3-style heredoc)", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$ini = getenv('TEST_PHP_EXTRA_ARGS');\n$descriptorspec = [['pipe', 'r'], STDOUT, STDERR];\n$proc = proc_open(\"$php $ini -a\", $descriptorspec, $pipes);\nvar_dump($proc);\nfwrite($pipes[0], \"echo <<<FOO\\n    bar\\n    FOO;\\n\");\nfwrite($pipes[0], \"print(<<<FOO\\nxx\\nFOO);\\n\");\nfwrite($pipes[0], \"echo <<<FOO\\n    xxx\\n    FOO;\\nFOO\\n;\\n\");\nfwrite($pipes[0], \"echo <<<FOO\\nFOOL\\nFOO\\n,1;\\n\");\nfwrite($pipes[0], \"echo <<<FOO\\nFOO4\\nFOO\\n,2;\\n\");\nfclose($pipes[0]);\nproc_close($proc);\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_015.phpt
  it("Test nowdoc and line numbering", function () {
    expect(parser.parseCode("<?php\nfunction error_handler($num, $msg, $file, $line) {\n    echo $line,\"\\n\";\n}\nset_error_handler('error_handler');\ntrigger_error(\"line\", E_USER_ERROR);\n$x = <<<EOF\nEOF;\nvar_dump($x);\ntrigger_error(\"line\", E_USER_ERROR);\n$x = <<<'EOF'\nEOF;\nvar_dump($x);\ntrigger_error(\"line\", E_USER_ERROR);\n$x = <<<EOF\ntest\nEOF;\nvar_dump($x);\ntrigger_error(\"line\", E_USER_ERROR);\n$x = <<<'EOF'\ntest\nEOF;\nvar_dump($x);\ntrigger_error(\"line\", E_USER_ERROR);\n$x = <<<EOF\ntest1\ntest2\ntest3\nEOF;\nvar_dump($x);\ntrigger_error(\"line\", E_USER_ERROR);\n$x = <<<'EOF'\ntest1\ntest2\ntest3\nEOF;\nvar_dump($x);\ntrigger_error(\"line\", E_USER_ERROR);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});

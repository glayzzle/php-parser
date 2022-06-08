// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/016.phpt
  it("CLI -a and readline", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n// disallow console escape sequences that may break the output\nputenv('TERM=VT100');\n$codes = array();\n$codes[1] = <<<EOT\necho 'Hello world';\nexit\nEOT;\n$codes[] = <<<EOT\necho 'multine\nsingle\nquote';\nexit\nEOT;\n$codes[] = <<<EOT\necho <<<HEREDOC\nHere\ncomes\nthe\ndoc\nHEREDOC;\nEOT;\n$codes[] = <<<EOT\nif (0) {\n    echo \"I'm not there\";\n}\necho \"Done\";\nEOT;\n$codes[] = <<<EOT\nfunction a_function_with_some_name() {\n    echo \"I was called!\";\n}\na_function_w\t);\nEOT;\nforeach ($codes as $key => $code) {\n    echo \"\\n--------------\\nSnippet no. $key:\\n--------------\\n\";\n    $code = escapeshellarg($code);\n    echo `echo $code | \"$php\" -a`, \"\\n\";\n}\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});

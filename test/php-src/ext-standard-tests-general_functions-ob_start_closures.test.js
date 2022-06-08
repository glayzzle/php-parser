// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/ob_start_closures.phpt
  it("Test ob_start() function : closures as output handlers", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_start() : closures as output handlers ***\\n\";\nob_start(function ($output) {\n  return 'Output (1): ' . $output;\n});\nob_start(function ($output) {\n  return 'Output (2): ' . $output;\n});\necho \"Test\\nWith newlines\\n\";\n$str1 = ob_get_contents ();\nob_end_flush();\n$str2 = ob_get_contents ();\nob_end_flush();\necho $str1, $str2;\n?>")).toMatchSnapshot();
  });
});

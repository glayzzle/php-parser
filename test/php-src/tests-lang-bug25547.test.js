// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug25547.phpt
  it("Bug #25547 (error_handler and array index with function call)", function () {
    expect(parser.parseCode("<?php\nfunction handler($errno, $errstr, $errfile, $errline)\n{\n    echo __FUNCTION__ . \"($errstr)\\n\";\n}\nset_error_handler('handler');\nfunction foo($x) {\n    return \"foo\";\n}\n$output = array();\n++$output[foo(\"bar\")];\nprint_r($output);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

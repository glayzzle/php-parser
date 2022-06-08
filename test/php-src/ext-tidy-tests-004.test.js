// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/004.phpt
  it("tidy_diagnose()", function () {
    expect(parser.parseCode("<?php\n$a = tidy_parse_string('<HTML></HTML>');\nvar_dump(tidy_diagnose($a));\necho str_replace(\"\\r\", \"\", tidy_get_error_buffer($a));\n$html = <<< HTML\n<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 3.2//EN\">\n<html>\n<head><title>foo</title></head>\n<body><p>hello</p></body>\n</html>\nHTML;\n$a = tidy_parse_string($html);\nvar_dump(tidy_diagnose($a));\necho tidy_get_error_buffer($a);\n?>")).toMatchSnapshot();
  });
});

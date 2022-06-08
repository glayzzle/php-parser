// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/bug61605.phpt
  it("Bug #61605 (header_remove() does not remove all headers)", function () {
    expect(parser.parseCode("<?php\nheader(\"A: first\");\nheader(\"A: second\", TRUE);\n$headers1 = headers_list();\nheader(\"A: third\", FALSE);\n$headers2 = headers_list();\nheader_remove(\"A\");\n$headers3 = headers_list();\nprint_r($headers1);\nprint_r($headers2);\nprint_r($headers3);\n?>")).toMatchSnapshot();
  });
});

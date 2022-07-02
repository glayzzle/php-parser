// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/head.phpt
  it("header() and friends", function () {
    expect(parser.parseCode("<?php\n$v1 = headers_sent();\n$v2 = headers_list();\nvar_dump(header(\"HTTP 1.0\", true, 200));\nvar_dump($v1);\nvar_dump($v2);\nvar_dump(header(\"\"));\nvar_dump(header(\"\", true));\nvar_dump(headers_sent());\nvar_dump(headers_list());\nvar_dump(header(\"HTTP blah\"));\nvar_dump(header(\"HTTP blah\", true));\nvar_dump(headers_sent());\nvar_dump(headers_list());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

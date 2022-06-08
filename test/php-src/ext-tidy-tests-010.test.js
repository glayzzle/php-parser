// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/010.phpt
  it("Accessing root, body, html, and head nodes..", function () {
    expect(parser.parseCode("<?php\n$a = tidy_parse_string(\"<HTML><BODY BGCOLOR=#FFFFFF ALINK=#000000></BODY></HTML>\", array('newline' => 'LF'));\nvar_dump($a->root());\nvar_dump($a->body());\nvar_dump($a->html());\nvar_dump($a->head());\n?>")).toMatchSnapshot();
  });
});

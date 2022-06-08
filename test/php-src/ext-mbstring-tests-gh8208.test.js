// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/gh8208.phpt
  it("GH-8208 (mb_encode_mimeheader: $indent functionality broken)", function () {
    expect(parser.parseCode("<?php\n$s = \"[service-Aufgaben S&W-Team][#19415] VM''s aufsetzen mit unterschiedlichen\";\n$p = 'Subject: ';\nvar_dump(\n    $p . mb_encode_mimeheader($s, 'UTF-8', 'Q', \"\\015\\012\", strlen($p)),\n    mb_encode_mimeheader($p . $s, 'UTF-8', 'Q', \"\\015\\012\", 0)\n);\n?>")).toMatchSnapshot();
  });
});

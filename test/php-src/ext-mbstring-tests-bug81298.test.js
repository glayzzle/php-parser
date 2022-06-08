// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug81298.phpt
  it("Bug #81298: mb_detect_encoding() segfaults when 7bit encoding is specified", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_detect_encoding(\"foobar.\", \"7bit\"));\nvar_dump(mb_detect_encoding(\"foobar.\", \"7bit,ascii\"));\nvar_dump(mb_detect_encoding(\"foobar.\", \"7bit,ascii,utf8\"));\nvar_dump(mb_detect_encoding(\"foobar.\", \"html\"));\nvar_dump(mb_detect_encoding(\"foobar.\", \"ascii,html\"));\n?>")).toMatchSnapshot();
  });
});

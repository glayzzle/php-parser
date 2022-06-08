// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sha1_basic.phpt
  it("sha1() with ASCII output.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sha1() : basic functionality ***\\n\";\necho \"\\n-- Without raw argument --\\n\";\nvar_dump(sha1(\"\"));\nvar_dump(sha1(\"a\"));\nvar_dump(sha1(\"abc\"));\nvar_dump(sha1(\"message digest\"));\nvar_dump(sha1(\"abcdefghijklmnopqrstuvwxyz\"));\nvar_dump(sha1(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\"));\nvar_dump(sha1(\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\"));\necho \"\\n-- With raw == false --\\n\";\nvar_dump(sha1(\"\", false));\nvar_dump(sha1(\"a\", false));\nvar_dump(sha1(\"abc\", false));\nvar_dump(sha1(\"message digest\", false));\nvar_dump(sha1(\"abcdefghijklmnopqrstuvwxyz\", false));\nvar_dump(sha1(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\", false));\nvar_dump(sha1(\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\", false));\necho \"\\n-- With raw == true --\\n\";\nvar_dump(bin2hex(sha1(\"\", true)));\nvar_dump(bin2hex(sha1(\"a\", true)));\nvar_dump(bin2hex(sha1(\"abc\", true)));\nvar_dump(bin2hex(sha1(\"message digest\", true)));\nvar_dump(bin2hex(sha1(\"abcdefghijklmnopqrstuvwxyz\", true)));\nvar_dump(bin2hex(sha1(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\", true)));\nvar_dump(bin2hex(sha1(\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\", true)));\n?>")).toMatchSnapshot();
  });
});

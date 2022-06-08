// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_decode_variation2.phpt
  it("Test session_decode() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_decode() : variation ***\\n\";\nvar_dump(session_start());\nvar_dump($_SESSION);\n$_SESSION[\"foo\"] = 1234567890;\n$_SESSION[\"bar\"] = \"Hello World!\";\n$_SESSION[\"guff\"] = 123.456;\nvar_dump($_SESSION);\nvar_dump(session_decode(\"foo|a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}guff|R:1;blah|R:1;\"));\nvar_dump($_SESSION);\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

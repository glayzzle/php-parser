// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_decode_variation1.phpt
  it("Test session_decode() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_decode() : variation ***\\n\";\nvar_dump(session_start());\nvar_dump(session_decode(\"foo|a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}guff|R:1;blah|R:1;\"));\nvar_dump($_SESSION);\nvar_dump(session_decode(\"foo|a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}guff|R:1;blah|R:1;\"));\nvar_dump($_SESSION);\nvar_dump(session_decode(\"foo|a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}guff|R:1;blah|R:1;\"));\nvar_dump($_SESSION);\nvar_dump(session_decode(\"foo|a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}guff|R:1;blah|R:1;\"));\nvar_dump($_SESSION);\nvar_dump(session_decode(\"foo|a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}guff|R:1;blah|R:1;\"));\nvar_dump($_SESSION);\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

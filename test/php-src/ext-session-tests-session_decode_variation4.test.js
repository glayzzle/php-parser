// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_decode_variation4.phpt
  it("Test session_decode() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_decode() : variation ***\\n\";\nvar_dump(session_start());\nvar_dump($_SESSION);\n$_SESSION[\"foo\"] = 1234567890;\n$_SESSION[\"bar\"] = \"Blah!\";\n$_SESSION[\"guff\"] = 123.456;\nvar_dump($_SESSION);\n$encoded = \"A2Zvb2k6MTIzNDU2Nzg5MDs=\";\nvar_dump(session_decode(base64_decode($encoded)));\nvar_dump($_SESSION);\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

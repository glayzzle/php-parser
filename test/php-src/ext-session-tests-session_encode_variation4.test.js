// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_encode_variation4.phpt
  it("Test session_encode() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_encode() : variation ***\\n\";\nvar_dump(session_start());\n$array = array(1,2,3);\n$_SESSION[\"foo\"] = &$array;\n$_SESSION[\"guff\"] = &$array;\n$_SESSION[\"blah\"] = &$array;\nvar_dump(session_encode());\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

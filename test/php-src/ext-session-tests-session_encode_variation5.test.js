// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_encode_variation5.phpt
  it("Test session_encode() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_encode() : variation ***\\n\";\nvar_dump(session_start());\n$array = array(1,2,3);\n$array[\"foo\"] = &$array;\n$array[\"blah\"] = &$array;\n$_SESSION[\"data\"] = &$array;\nvar_dump(session_encode());\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

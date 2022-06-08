// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_encode_variation8.phpt
  it("Test session_encode() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_encode() : variation ***\\n\";\nvar_dump(session_start());\n$_SESSION[\"foo\"] = 1234567890;\n$encoded = session_encode();\nvar_dump(base64_encode($encoded));\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

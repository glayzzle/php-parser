// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_encode_variation2.phpt
  it("Test session_encode() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_encode() : variation ***\\n\";\nvar_dump(session_encode());\nvar_dump(session_destroy());\nvar_dump(session_encode());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

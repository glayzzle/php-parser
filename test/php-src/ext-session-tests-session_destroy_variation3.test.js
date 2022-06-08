// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_destroy_variation3.phpt
  it("Test session_destroy() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_destroy() : variation ***\\n\";\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump(session_destroy());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump(session_destroy());\nvar_dump(session_id());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_start_variation1.phpt
  it("Test session_start() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_start() : variation ***\\n\";\nvar_dump(session_start());\nvar_dump(session_start());\nvar_dump(session_start());\nvar_dump(session_start());\nvar_dump(session_start());\nsession_destroy();\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

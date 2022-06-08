// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_name_basic.phpt
  it("Test session_name() function : error functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_name() : error functionality ***\\n\";\nvar_dump(session_name());\nvar_dump(session_name(\"blah\"));\nvar_dump(session_start());\nvar_dump(session_name());\nvar_dump(session_destroy());\nvar_dump(session_name());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

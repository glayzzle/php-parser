// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug66481.phpt
  it("Bug #66481: Calls to session_name() segfault when session.name is null.", function () {
    expect(parser.parseCode("<?php\nob_start();\nvar_dump(session_name(\"foo\"));\nvar_dump(session_name(\"bar\"));\n?>")).toMatchSnapshot();
  });
});

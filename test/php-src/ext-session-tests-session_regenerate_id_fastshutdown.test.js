// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_regenerate_id_fastshutdown.phpt
  it("Test session_regenerate_id() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nsession_start();\ndefine (\"user\", \"foo\");\nvar_dump(session_regenerate_id());\n?>")).toMatchSnapshot();
  });
});

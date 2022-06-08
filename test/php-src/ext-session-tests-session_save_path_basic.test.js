// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_save_path_basic.phpt
  it("Test session_save_path() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_save_path() : error functionality ***\\n\";\n$directory = __DIR__;\nvar_dump(session_save_path());\nvar_dump(session_save_path($directory));\nvar_dump(session_save_path());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

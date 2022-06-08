// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_save_path_variation1.phpt
  it("Test session_save_path() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_save_path() : variation ***\\n\";\n$directory = __DIR__;\nvar_dump(session_save_path());\nvar_dump(session_save_path($directory));\nvar_dump(session_save_path());\nvar_dump(session_start());\nvar_dump(session_save_path());\nvar_dump(session_save_path($directory));\nvar_dump(session_save_path());\nvar_dump(session_destroy());\nvar_dump(session_save_path());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

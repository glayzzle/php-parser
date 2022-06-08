// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_save_path_variation4.phpt
  it("Test session_save_path() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_save_path() : variation ***\\n\";\n$initdir = __DIR__;\n$sessions = ($initdir.\"/session_save_path_variation4\");\nchdir($initdir);\n// Delete the existing directory\nif (file_exists($sessions) === TRUE) {\n    @rmdir($sessions);\n}\nvar_dump(mkdir($sessions));\nvar_dump(chdir($sessions));\nini_set(\"session.save_path\", $initdir);\nvar_dump(session_save_path());\nvar_dump(session_start());\nvar_dump(session_save_path());\nvar_dump(session_destroy());\nvar_dump(session_save_path());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

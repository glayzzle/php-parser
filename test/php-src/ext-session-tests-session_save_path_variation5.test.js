// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_save_path_variation5.phpt
  it("Test session_save_path() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_save_path() : variation ***\\n\";\n$directory = __DIR__;\n$sessions = ($directory.\"/session_save_path_variation5\");\nchdir($directory);\nini_set('open_basedir', '.');\n// Delete the existing directory\nif (file_exists($sessions) === TRUE) {\n    @rmdir($sessions);\n}\nvar_dump(mkdir($sessions));\nvar_dump(chdir($sessions));\nini_set(\"session.save_path\", $directory);\nvar_dump(session_save_path());\nvar_dump(rmdir($sessions));\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

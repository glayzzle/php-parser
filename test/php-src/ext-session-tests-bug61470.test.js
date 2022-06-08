// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug61470.phpt
  it("Bug #61470 (session_regenerate_id() does not create session file)", function () {
    expect(parser.parseCode("<?php\nob_start();\nini_set('session.save_path', __DIR__);\n$path = ini_get('session.save_path') . '/sess_';\nsession_start();\n// starts session & creates and locks file\n$file1 = $path . session_id();\nvar_dump(is_file($file1));\nsession_regenerate_id();\n// starts new session, but file is not create!\n$file2 = $path . session_id();\nvar_dump(is_file($file2));\n// cleanup\n@unlink($file1);\n@unlink($file2);\n?>")).toMatchSnapshot();
  });
});

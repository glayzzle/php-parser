// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_save_path_variation2.phpt
  it("Test session_save_path() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_save_path() : variation ***\\n\";\nini_set(\"session.save_path\", \"/blah\");\nvar_dump(ini_get(\"session.save_path\"));\nvar_dump(session_start());\nvar_dump(ini_get(\"session.save_path\"));\nvar_dump(session_destroy());\nvar_dump(ini_get(\"session.save_path\"));\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

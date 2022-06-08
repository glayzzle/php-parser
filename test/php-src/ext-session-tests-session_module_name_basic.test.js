// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_module_name_basic.phpt
  it("Test session_module_name() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_module_name() : basic functionality ***\\n\";\nvar_dump(session_module_name(\"files\"));\nvar_dump(session_module_name());\nvar_dump(session_start());\nvar_dump(session_module_name());\nvar_dump(session_destroy());\nvar_dump(session_module_name());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

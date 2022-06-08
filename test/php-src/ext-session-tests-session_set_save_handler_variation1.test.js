// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_variation1.phpt
  it("Test session_set_save_handler() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : variation ***\\n\";\nvar_dump(session_module_name());\nvar_dump(session_module_name(FALSE));\nvar_dump(session_module_name());\nvar_dump(session_module_name(\"blah\"));\nvar_dump(session_module_name());\nvar_dump(session_module_name(\"files\"));\nvar_dump(session_module_name());\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_module_name_variation1.phpt
  it("Test session_module_name() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_module_name() : variation ***\\n\";\nvar_dump(session_module_name(\"blah\"));\nvar_dump(session_start());\nvar_dump(session_module_name());\nvar_dump(session_destroy());\nvar_dump(session_module_name());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

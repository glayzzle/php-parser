// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_id_error3.phpt
  it("Test session_id() function : error functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_id() : error functionality ***\\n\";\nvar_dump(session_id());\nvar_dump(session_id(\"!\"));\nvar_dump(session_id());\n@session_start();\n@session_destroy();\nvar_dump(session_id());\nvar_dump(session_id(\"?><\"));\nvar_dump(session_id());\n@session_start();\n@session_destroy();\nvar_dump(session_id());\nvar_dump(session_id(\"\\xa3$%^&*()\"));\nvar_dump(session_id());\n@session_start();\n@session_destroy();\nvar_dump(session_id());\nvar_dump(session_id(\"\\r\\n\"));\nvar_dump(session_id());\n@session_start();\n@session_destroy();\nvar_dump(session_id());\nvar_dump(session_id(\"\\0\"));\nvar_dump(session_id());\n@session_start();\n@session_destroy();\nvar_dump(session_id());\nvar_dump(session_id(\"\\xac``@~:{>?><,./[]+--\"));\nvar_dump(session_id());\n@session_start();\n@session_destroy();\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

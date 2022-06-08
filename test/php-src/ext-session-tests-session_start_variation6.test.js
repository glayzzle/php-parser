// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_start_variation6.phpt
  it("Test session_start() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_start() : variation ***\\n\";\nsession_start();\n$_SESSION['colour'] = 'green';\n$_SESSION['animal'] = 'cat';\n$_SESSION['person'] = 'julia';\n$_SESSION['age'] = 6;\nvar_dump($_SESSION);\nvar_dump(session_write_close());\nvar_dump($_SESSION);\nsession_start();\nvar_dump($_SESSION);\nsession_destroy();\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

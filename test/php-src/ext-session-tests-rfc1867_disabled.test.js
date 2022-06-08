// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/rfc1867_disabled.phpt
  it("session rfc1867 disabled", function () {
    expect(parser.parseCode("<?php\nsession_start();\nvar_dump(session_id());\nvar_dump($_FILES);\nvar_dump(isset($_SESSION[\"upload_progress_\" . basename(__FILE__)]));\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});

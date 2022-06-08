// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/rfc1867_sid_cookie.phpt
  it("session rfc1867 sid cookie", function () {
    expect(parser.parseCode("<?php\nsession_start();\nvar_dump(session_id());\nvar_dump(basename(__FILE__) == $_POST[ini_get(\"session.upload_progress.name\")]);\nvar_dump($_FILES);\nvar_dump($_SESSION[\"upload_progress_\" . basename(__FILE__)]);\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});

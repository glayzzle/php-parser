// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/rfc1867_inter.phpt
  it("session rfc1867", function () {
    expect(parser.parseCode("<?php\nsession_start();\nvar_dump(session_id());\nvar_dump($_FILES);\nvar_dump($_SESSION[\"upload_progress_\" . basename(__FILE__) . \"_1\"]);\nvar_dump(isset($_SESSION[\"upload_progress_\" . basename(__FILE__) . \"_2\"]));\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});

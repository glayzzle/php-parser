// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug72300.phpt
  it("Bug #72300 (ignore_user_abort(false) has no effect)", function () {
    expect(parser.parseCode("<?php\nvar_dump(ignore_user_abort(true));\nvar_dump(ignore_user_abort());\nvar_dump(ini_get(\"ignore_user_abort\"));\nvar_dump(ignore_user_abort(false));\nvar_dump(ignore_user_abort());\nvar_dump(ini_get(\"ignore_user_abort\"));\n?>")).toMatchSnapshot();
  });
});

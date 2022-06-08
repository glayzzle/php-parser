// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/rfc1867_invalid_settings.phpt
  it("session rfc1867 invalid settings", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_get(\"session.upload_progress.freq\"));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug80774.phpt
  it("Bug #80774 (session_name() problem with backslash)", function () {
    expect(parser.parseCode("<?php\nsession_name(\"foo\\\\bar\");\nsession_id('12345');\nsession_start();\n?>")).toMatchSnapshot();
  });
});

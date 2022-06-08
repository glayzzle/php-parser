// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug38377.phpt
  it("Bug #38377 (session_destroy() gives warning after session_regenerate_id())", function () {
    expect(parser.parseCode("<?php\nsession_start();\nsession_regenerate_id();\nsession_destroy();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

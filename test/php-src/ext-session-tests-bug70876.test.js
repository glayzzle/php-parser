// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug70876.phpt
  it("Bug #70876 Segmentation fault when regenerating session id with strict mode", function () {
    expect(parser.parseCode("<?php\nini_set('session.use_strict_mode', true);\nsession_start();\nsession_regenerate_id();\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});

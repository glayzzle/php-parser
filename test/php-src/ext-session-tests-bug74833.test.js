// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug74833.phpt
  it("Bug #74833 Session module number is uninitialized when SID is reset", function () {
    expect(parser.parseCode("<?php\nob_start();\nsession_start();\nsession_regenerate_id();\n$c = get_defined_constants(true);\n/* Ensure the SID constant has correct module number. */\nvar_dump(isset($c['session']['SID']));\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

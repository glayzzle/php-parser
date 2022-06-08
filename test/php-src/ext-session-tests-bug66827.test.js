// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug66827.phpt
  it("Bug #66827: Session raises E_NOTICE when session name variable is array.", function () {
    expect(parser.parseCode("<?php\n$_COOKIE[session_name()] = array();\nsession_start();\necho 'OK';\n?>")).toMatchSnapshot();
  });
});

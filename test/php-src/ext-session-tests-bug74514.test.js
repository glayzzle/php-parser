// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug74514.phpt
  it("Bug #74514 5 session functions incorrectly warn when calling in read-only/getter mode.", function () {
    expect(parser.parseCode("<?php\n/*\nCLI ignores HTTP headers at all, i.e. does not output any HTTP headers,\nbut it still uses SG(headers_sent).\nCLI works as Web server, so SG(headers_sent) cannot be ignored nor changed.\nTherefore, once HTTP header is considered as sent, these functions emits\n'headers already sent' errors if they try to set new values.\nOlder PHPs(<7.2) did not care about this misuse on Web SAPI.\n*/\nvar_dump(session_name('foo'));\nvar_dump(session_name());\nvar_dump(session_module_name());\nvar_dump(session_save_path());\nvar_dump(session_cache_limiter());\nvar_dump(session_cache_expire());\n?>")).toMatchSnapshot();
  });
});

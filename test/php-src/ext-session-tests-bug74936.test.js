// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug74936.phpt
  it("Bug #74936 session_cache_expire() triggers a warning in read mode.", function () {
    expect(parser.parseCode("<?php\nsession_start();\nvar_dump(session_cache_expire());\nvar_dump(session_cache_limiter());\nvar_dump(session_save_path());\n?>")).toMatchSnapshot();
  });
});

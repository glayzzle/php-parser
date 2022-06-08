// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_cache_expire_basic.phpt
  it("Test session_cache_expire() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_cache_expire() : basic functionality ***\\n\";\nvar_dump(session_cache_expire());\nvar_dump(session_cache_expire(1234567890));\nvar_dump(session_cache_expire(180));\nvar_dump(session_start());\nvar_dump(session_cache_expire());\nvar_dump(session_destroy());\nvar_dump(session_cache_expire());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

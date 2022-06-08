// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_cache_limiter_variation1.phpt
  it("Test session_cache_limiter() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_cache_limiter() : variation ***\\n\";\nvar_dump(session_cache_limiter());\nvar_dump(session_start());\nvar_dump(session_cache_limiter());\nvar_dump(session_cache_limiter(\"public\"));\nvar_dump(session_cache_limiter());\nvar_dump(session_destroy());\nvar_dump(session_cache_limiter());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

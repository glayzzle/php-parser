// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_cache_limiter_basic.phpt
  it("Test session_cache_limiter() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_cache_limiter() : basic functionality ***\\n\";\nvar_dump(session_cache_limiter());\nvar_dump(session_cache_limiter(\"public\"));\nvar_dump(session_cache_limiter());\nvar_dump(session_start());\nvar_dump(session_destroy());\nvar_dump(session_cache_limiter());\nvar_dump(session_cache_limiter(\"private\"));\nvar_dump(session_cache_limiter());\nvar_dump(session_start());\nvar_dump(session_destroy());\nvar_dump(session_cache_limiter());\nvar_dump(session_cache_limiter(\"nocache\"));\nvar_dump(session_cache_limiter());\nvar_dump(session_start());\nvar_dump(session_destroy());\nvar_dump(session_cache_limiter());\nvar_dump(session_cache_limiter(\"private_no_expire\"));\nvar_dump(session_cache_limiter());\nvar_dump(session_start());\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});

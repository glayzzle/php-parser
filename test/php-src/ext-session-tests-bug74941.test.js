// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug74941.phpt
  it("Bug #74941 session_start() triggers a warning after headers have been sent but cookies are not used", function () {
    expect(parser.parseCode("<?php\nini_set('session.use_cookies', false);\nini_set('session.cache_limiter', false);\necho \".\\n\";\nsession_id('BUG74941');\nvar_dump(session_start());\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_get_info_argon2.phpt
  it("Test normal operation of password_get_info() with Argon2i and Argon2id", function () {
    expect(parser.parseCode("<?php\nvar_dump(password_get_info('$argon2i$v=19$m=65536,t=3,p=1$SWhIcG5MT21Pc01PbWdVZw$WagZELICsz7jlqOR2YzoEVTWb2oOX1tYdnhZYXxptbU'));\nvar_dump(password_get_info('$argon2id$v=19$m=1024,t=2,p=2$Zng1U1RHS0h1aUJjbGhPdA$ajQnG5s01Ws1ad8xv+1qGfXF8mYxxWdyul5rBpomuZQ'));\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});

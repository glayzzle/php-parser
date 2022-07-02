// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_verify.phpt
  it("Test normal operation of password_verify)", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\nvar_dump(password_verify(123, 123));\nvar_dump(password_verify(\"foo\", '$2a$07$usesomesillystringforsalt$'));\nvar_dump(password_verify('rasmusler', '$2a$07$usesomesillystringfore2uDLvp1Ii2e./U9C8sBjqp8I90dH6hi'));\nvar_dump(password_verify('rasmuslerdorf', '$2a$07$usesomesillystringfore2uDLvp1Ii2e./U9C8sBjqp8I90dH6hi'));\nvar_dump(password_verify(\"foo\", null));\nvar_dump(password_verify(\"rasmuslerdorf\", \"rl.3StKT.4T8M\"));\nvar_dump(password_verify(\"foo\", \"$1\"));\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});

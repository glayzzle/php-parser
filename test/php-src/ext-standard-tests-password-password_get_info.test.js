// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_get_info.phpt
  it("Test normal operation of password_get_info()", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\n// Test Bcrypt\nvar_dump(password_get_info('$2y$10$MTIzNDU2Nzg5MDEyMzQ1Nej0NmcAWSLR.oP7XOR9HD/vjUuOj100y'));\n// Test Bcrypt Cost\nvar_dump(password_get_info('$2y$11$MTIzNDU2Nzg5MDEyMzQ1Nej0NmcAWSLR.oP7XOR9HD/vjUuOj100y'));\n// Test Bcrypt Invalid Length\nvar_dump(password_get_info('$2y$11$MTIzNDU2Nzg5MDEyMzQ1Nej0NmcAWSLR.oP7XOR9HD/vjUuOj100'));\n// Test Non-Bcrypt\nvar_dump(password_get_info('$1$rasmusle$rISCgZzpwk3UhDidwXvin0'));\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});

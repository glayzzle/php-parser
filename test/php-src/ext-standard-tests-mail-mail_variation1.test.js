// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_variation1.phpt
  it("Test mail() function : variation invalid program for sendmail", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mail() : variation ***\\n\";\n// Initialise all required variables\n$to = 'user@example.com';\n$subject = 'Test Subject';\n$message = 'A Message';\nvar_dump( mail($to, $subject, $message) );\n?>")).toMatchSnapshot();
  });
});

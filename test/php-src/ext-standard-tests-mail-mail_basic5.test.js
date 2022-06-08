// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_basic5.phpt
  it("Test mail() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mail() : basic functionality ***\\n\";\n// Initialise all required variables\n$to = 'user@example.com';\n$subject = 'Test Subject';\n$message = 'A Message';\necho \"-- failure --\\n\";\nvar_dump( mail($to, $subject, $message) );\n?>")).toMatchSnapshot();
  });
});

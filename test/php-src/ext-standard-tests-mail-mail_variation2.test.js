// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_variation2.phpt
  it("Test mail() function : variation force extra parameters", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mail() : basic functionality ***\\n\";\n// Initialise all required variables\n$to = 'user@example.com';\n$subject = 'Test Subject';\n$message = 'A Message';\n$outFile = \"/tmp/php_test_mailVariation2.out\";\n@unlink($outFile);\nvar_dump( mail($to, $subject, $message) );\necho file_get_contents($outFile);\nunlink($outFile);\n?>")).toMatchSnapshot();
  });
});

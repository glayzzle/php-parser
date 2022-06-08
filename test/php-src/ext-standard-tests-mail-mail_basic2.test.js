// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_basic2.phpt
  it("Test mail() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mail() : basic functionality ***\\n\";\n// Initialise all required variables\n$to = 'user@example.com';\n$subject = 'Test Subject';\n$message = 'A Message';\n$additional_headers = 'KHeaders';\n$additional_parameters = \"-n\";\n$outFile = \"/tmp/php_test_mailBasic2.out\";\n@unlink($outFile);\necho \"-- extra parameters --\\n\";\n// Calling mail() with all possible arguments\nvar_dump( mail($to, $subject, $message, $additional_headers, $additional_parameters) );\necho file_get_contents($outFile);\nunlink($outFile);\n?>")).toMatchSnapshot();
  });
});

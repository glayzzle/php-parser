// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_basic.phpt
  it("Test mail() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mail() : basic functionality ***\\n\";\n// Initialise all required variables\n$to = 'user@example.com';\n$subject = 'Test Subject';\n$message = 'A Message';\n$additional_headers = 'KHeaders';\n$outFile = \"mailBasic.out\";\n@unlink($outFile);\necho \"-- All Mail Content Parameters --\\n\";\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho file_get_contents($outFile);\nunlink($outFile);\necho \"\\n-- Mandatory Parameters --\\n\";\n// Calling mail() with mandatory arguments\nvar_dump( mail($to, $subject, $message) );\necho file_get_contents($outFile);\nunlink($outFile);\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/bug51604.phpt
  it("Bug #51604 (newline in end of header is shown in start of message)", function () {
    expect(parser.parseCode("<?php\n// Initialise all required variables\n$to = 'user@example.com';\n$subject = 'Test Subject';\n$message = 'A Message';\n$additional_headers = \"KHeaders\\n\\n\\n\\n\\n\";\n$outFile = \"mail_bug51604.out\";\n@unlink($outFile);\n// Calling mail() with all additional headers\nvar_dump( mail($to, $subject, $message, $additional_headers) );\necho file_get_contents($outFile);\nunlink($outFile);\n?>")).toMatchSnapshot();
  });
});

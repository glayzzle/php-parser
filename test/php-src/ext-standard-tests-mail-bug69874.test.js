// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/bug69874.phpt
  it("Bug #69874: Null addtional_headers does not send mail", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mail() : send email without additional headers ***\\n\";\n// Initialise all required variables\n$to = 'user@company.com';\n$subject = 'Test Subject';\n$message = 'A Message';\n$outFile = \"mailBug69874.out\";\n@unlink($outFile);\nvar_dump( mail($to, $subject, $message) );\necho file_get_contents($outFile);\nunlink($outFile);\n?>")).toMatchSnapshot();
  });
});

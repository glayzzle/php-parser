// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/gh7875.phpt
  it("GH-7875 (mails are sent even if failure to log throws exception)", function () {
    expect(parser.parseCode("<?php\nfunction exception_error_handler($severity, $message, $file, $line) {\n    if (!(error_reporting() & $severity)) {\n        return;\n    }\n    throw new ErrorException($message, 0, $severity, $file, $line);\n}\nset_error_handler(\"exception_error_handler\");\ntouch(__DIR__ . \"/gh7875.mail.log\");\nchmod(__DIR__ . \"/gh7875.mail.log\", 0444);\ntry {\n\tmail('recipient@example.com', 'Subject', 'Body', []);\n\techo 'Not Reached';\n} catch (\\Exception $e) {\n\techo $e->getMessage(), PHP_EOL;\n    var_dump(file_exists(__DIR__ . \"/gh7875.mail.out\"));\n}\n?>")).toMatchSnapshot();
  });
});

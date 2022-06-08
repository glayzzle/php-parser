// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_log.phpt
  it("Test mail() function : mail.log ini setting", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$logfile = ini_get(\"mail.log\");\nif (file_exists($logfile)) {\n    unlink($logfile);\n}\ntouch($logfile);\nclearstatcache();\n$to = \"test@example.com\";\n$subject = \"mail.log test\";\n$message = \"Testing mail.log\";\n$headers = \"X-Test: 1\";\nvar_dump(filesize($logfile) == 0);\nclearstatcache();\nvar_dump(mail($to, $subject, $message, $headers));\nvar_dump(filesize($logfile) > 0);\nclearstatcache();\necho file_get_contents($logfile);\n?>\nDone")).toMatchSnapshot();
  });
});

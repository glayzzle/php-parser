// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug68391-conf-include-order.phpt
  it("FPM: bug68391 - Configuration inclusion in alphabetical order", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg['main'] = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_level = notice\ninclude = {{INCLUDE:CONF}}\nEOT;\n$cfg['poolTemplate'] = <<<EOT\n[%name%]\nlisten = {{ADDR[%name%]}}\nuser = foo\npm = ondemand\npm.max_children = 5\nEOT;\n$cfg['names'] = ['cccc', 'aaaa', 'eeee', 'dddd', 'bbbb'];\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$userMessage = \"'user' directive is ignored when FPM is not running as root\";\n$tester->expectLogNotice($userMessage, 'aaaa');\n$tester->expectLogNotice($userMessage, 'bbbb');\n$tester->expectLogNotice($userMessage, 'cccc');\n$tester->expectLogNotice($userMessage, 'dddd');\n$tester->expectLogNotice($userMessage, 'eeee');\n$tester->expectLogStartNotices();\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});

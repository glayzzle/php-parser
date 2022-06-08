// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug72185-fcgi-empty-frame.phpt
  it("FPM: bug72185 - FastCGI empty frame incorrectly created", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 2\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 2\ncatch_workers_output = yes\ndecorate_workers_output = no\nphp_value[html_errors] = false\nEOT;\n$code = <<<'EOT'\n<?php\nfor ($i=0; $i < 167; $i++) {\n    error_log('PHP is the best programming language');\n}\necho 'end';\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectBody('end');\nfor ($i=0; $i < 167; $i++) {\n    $tester->expectLogNotice(\"PHP message: PHP is the best programming language\");\n}\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});

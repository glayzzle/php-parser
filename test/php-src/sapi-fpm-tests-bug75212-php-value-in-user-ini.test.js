// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug75212-php-value-in-user-ini.phpt
  it("FPM: bug75212 - php_value acts like php_admin_value", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nphp_admin_value[memory_limit]=32M\nphp_value[date.timezone]=Europe/London\nEOT;\n$code = <<<EOT\n<?php\necho \"Test Start\\n\";\nvar_dump(ini_get('memory_limit'), ini_get('date.timezone'));\necho \"Test End\\n\";\nEOT;\n$ini = <<<EOT\nmemory_limit=64M\ndate.timezone=Europe/Paris\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->setUserIni($ini);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectBody([\n    'Test Start',\n    'string(3) \"32M\"',\n    'string(12) \"Europe/Paris\"',\n    'Test End'\n]);\n$tester->terminate();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});

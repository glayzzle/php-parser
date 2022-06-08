// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/php-admin-doc-root.phpt
  it("FPM: php_admin_value doc_root usage", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$docRoot = __DIR__ . '/';\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nphp_admin_value[doc_root] = $docRoot\nEOT;\n$code = <<<EOT\n<?php\necho \"OK\";\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$sourceFile = $tester->makeSourceFile();\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request(uri: basename($sourceFile), scriptFilename: $sourceFile)->expectBody('OK');\n$tester->terminate();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});

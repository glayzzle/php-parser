// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug69625-no-script-filename.phpt
  it("FPM: bug69625 - 404 should be returned on missing SCRIPT_FILENAME", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$code = <<<EOT\n<?php\necho \"Test\\n\";\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester\n    ->request('', ['SCRIPT_FILENAME' => null])\n    ->expectHeader('Status', '404 Not Found')\n    ->expectError('Primary script unknown');\n$tester->terminate();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});

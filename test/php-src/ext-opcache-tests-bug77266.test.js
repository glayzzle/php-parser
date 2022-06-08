// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77266.phpt
  it("Bug #77266 (Assertion failed in dce_live_ranges)", function () {
    expect(parser.parseCode("<?php\nfinal class Lock\n{\n    private static function clearOrphanedLocks()\n    {\n        $lockList = [];\n        $serverMonitors = array();\n        $listCount = count($lockList);\n        if ( is_array($lockList) && $listCount > 0 ) {\n            $v = explode(':', $value);\n            if (!$serverMonitors[$v[0]]['m']) {\n                $serverMonitors[$v[0]]['m'] = new ServerMonitor($v[0]);\n            }\n        }\n    }\n}\n?>\nokey")).toMatchSnapshot();
  });
});

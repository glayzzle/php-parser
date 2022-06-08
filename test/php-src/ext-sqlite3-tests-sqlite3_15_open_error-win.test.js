// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_15_open_error-win.phpt
  it("SQLite3::open error test", function () {
    expect(parser.parseCode("<?php\n$sysroot = exec('echo %systemroot%');\n$icacls = \"$sysroot\\\\System32\\\\icacls.exe\";\n$user = get_current_user();\n$unreadable = __DIR__ . '/unreadable.db';\ntouch($unreadable);\n$cmd = $icacls . ' ' . $unreadable . ' /inheritance:r /deny ' . $user . ':(F,M,R,RX,W)';\nexec($cmd);\ntry {\n    $db = new SQLite3($unreadable);\n} catch (Exception $e) {\n    echo $e . \"\\n\";\n}\necho \"Done\\n\";\n$cmd = $icacls . ' ' . $unreadable . ' /grant ' . $user . ':(F,M,R,RX,W)';\nexec($cmd);\nunlink($unreadable);\n?>")).toMatchSnapshot();
  });
});

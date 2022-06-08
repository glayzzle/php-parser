// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug46614.phpt
  it("Bug #46614 (Extended MySQLi class gives incorrect empty() result)", function () {
    expect(parser.parseCode("<?php\nclass MySQL_Ext extends mysqli{\n    protected $fooData = array();\n    public function isEmpty()\n    {\n        $this->extData[] = 'Bar';\n        return empty($this->extData);\n    }\n}\ninclude (\"connect.inc\");\n$MySQL_Ext = new MySQL_Ext($host, $user, $passwd, $db, $port, $socket);\n$isEmpty = $MySQL_Ext->isEmpty();\nvar_dump($isEmpty);\n?>")).toMatchSnapshot();
  });
});

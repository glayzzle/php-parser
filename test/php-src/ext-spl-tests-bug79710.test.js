// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug79710.phpt
  it("Bug #79710: Reproducible segfault in error_handler during GC involved an SplFileObject", function () {
    expect(parser.parseCode("<?php\nclass Target\n{\n    public $sfo;\n    public function __construct($sfo) {\n        $this->sfo = $sfo;\n    }\n    public function __destruct() {\n        // If the SplFileObject is destructed first,\n        // underlying FD is no longer valid and will cause error upon calling flock\n        $this->sfo->flock(2);\n    }\n}\nclass Run\n{\n    static $sfo;\n    static $foo;\n    public static function main() {\n        // Creation ordering is important for repro\n        // $sfo needed to be destructed before $foo.\n        Run::$sfo = new SplTempFileObject();\n        Run::$foo = new Target(Run::$sfo);\n    }\n}\nRun::main();\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_001.phpt
  it("SSA construction for CFG with unreachable basic blocks", function () {
    expect(parser.parseCode("<?php\nclass X {\n    public function __get($n) {\n      if ($n === 'type') {\n        trigger_error('Deprecated type property called; use instanceof', E_USER_NOTICE);\n        switch (get_class($this)) {\n          case 'HTMLPurifier_Token_Start':      return 'start';\n          default: return null;\n        }\n      }\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/issue0079.phpt
  it("ISSUE #79 (Optimization Problem/Bug)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function run() {\n        $r = $this->my_parse_m();\n        var_dump ($r);\n        return $r;\n    }\n    public function my_parse_m() {\n        $test = true;\n        if ($test === true) {\n            $a = 'b';\n        } else {\n            return false;\n        }\n//      flush();\n        return true;\n    }\n}\n$t = new Test();\nvar_dump ($t->run());\n?>")).toMatchSnapshot();
  });
});

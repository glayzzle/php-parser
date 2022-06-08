// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug65510.phpt
  it("Bug #65510 (5.5.2 crashes in _get_zval_ptr_ptr_var)", function () {
    expect(parser.parseCode("<?php\nfunction parseQuery() {\n    $m = array(\"l\", \"a\", \"r\", \"u\", \"e\", \"n\", \"c\", \"e\");\n    foreach($m as $n) {\n        @list($a, $b) = $n;\n    }\n}\nparseQuery();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});

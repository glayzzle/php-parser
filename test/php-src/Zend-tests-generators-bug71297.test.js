// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug71297.phpt
  it("Bug #71297 (Memory leak with consecutive yield from)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    yield array_fill(0, 10000, 4);\n}\nfunction genLeak() {\n    $i = 0;\n    while (1) {\n        yield from foo();\n        print $i++;\n    }\n}\n$x = 0;\nforeach (genLeak() as $i) {\n    if ($x++ == 3) break;\n}\n?>")).toMatchSnapshot();
  });
});

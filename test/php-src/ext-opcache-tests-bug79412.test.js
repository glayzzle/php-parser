// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug79412.phpt
  it("Bug #79412 (Opcache chokes and uses 100% CPU on specific script)", function () {
    expect(parser.parseCode("<?php\n$limitPerRun = 10;\nforeach ($foo as $bar) {\n    $count = 0;\n    foreach ($runs as $run) {\n        ++$count;\n        if ($count >= $limitPerRun) {\n            break;\n        }\n    }\n    foo($limitPerRun);\n}\n?>")).toMatchSnapshot();
  });
});

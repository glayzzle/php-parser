// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug69549.phpt
  it("Bug #69549 (Memory leak with opcache.optimization_level=0xFFFFFFFF)", function () {
    expect(parser.parseCode("<?php\n$a = array(true);\nif($a[0] && false) {\n  echo 'test';\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});

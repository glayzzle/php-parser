// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_thread_safe.phpt
  it("mysqli_thread_safe()", function () {
    expect(parser.parseCode("<?php\n    if (!is_bool($tmp = mysqli_thread_safe()))\n        printf(\"[001] Expecting boolean/any, got %s/%s.\\n\", gettype($tmp), $tmp);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});

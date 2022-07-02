// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55509.phpt
  it("Bug #55509 (segfault on x86_64 using more than 2G memory)", function () {
    expect(parser.parseCode("<?php\n$a1 = str_repeat(\"1\", 1024 * 1024 * 1024 * 0.5);\necho \"1\\n\";\n$a2 = str_repeat(\"2\", 1024 * 1024 * 1024 * 0.5);\necho \"2\\n\";\n$a3 = str_repeat(\"3\", 1024 * 1024 * 1024 * 0.5);\necho \"3\\n\";\n$a4 = str_repeat(\"4\", 1024 * 1024 * 1024 * 0.5);\necho \"4\\n\";\n$a5 = str_repeat(\"5\", 1024 * 1024 * 1024 * 0.5);\necho \"5\\n\";\n?>")).toMatchSnapshot();
  });
});

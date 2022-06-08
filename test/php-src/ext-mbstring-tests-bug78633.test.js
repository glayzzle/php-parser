// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug78633.phpt
  it("Bug #78633 (Heap buffer overflow (read) in mb_eregi)", function () {
    expect(parser.parseCode("<?php\n$res = mb_eregi(\".+Isssǰ\", \".+Isssǰ\");\nif (is_bool($res)) {\n    echo \"ok\\n\";\n} else {\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});

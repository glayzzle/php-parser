// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71300.phpt
  it("Bug #71300 (Segfault in zend_fetch_string_offset)", function () {
    expect(parser.parseCode("<?php\nfunction test1() {\n    for ($n = 'a'; $n < 'g'; $n++) {\n        $$n = 1;\n    }\n    $$n = $$n[++$n] = \"test\";\n    return $$n;\n}\nvar_dump(test1());\nfunction test2() {\n    /* See #71303 for why not using for loop here */\n    $n = \"a\";\n    $$n .= $$n[++$n] = \"test\";\n    return $$n;\n}\nvar_dump(test2());\n?>")).toMatchSnapshot();
  });
});

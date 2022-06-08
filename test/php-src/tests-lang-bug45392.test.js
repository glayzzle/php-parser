// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug45392.phpt
  it("Bug #45392 (ob_start()/ob_end_clean() and memory_limit)", function () {
    expect(parser.parseCode("<?php\necho __LINE__ . \"\\n\";\nini_set('memory_limit', \"2M\");\nob_start();\n$i = 0;\nwhile($i++ < 5000)  {\n  echo str_repeat(\"may not be displayed \", 42);\n}\nob_end_clean();\n?>")).toMatchSnapshot();
  });
});

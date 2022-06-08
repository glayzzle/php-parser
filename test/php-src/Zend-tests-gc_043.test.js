// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_043.phpt
  it("GC buffer shouldn't get reused when removing nested data", function () {
    expect(parser.parseCode("<?php\n$s = <<<'STR'\nO:8:\"stdClass\":2:{i:5;C:8:\"SplStack\":29:{i:4;:r:1;:O:8:\"stdClass\":0:{}}i:0;O:13:\"RegexIterator\":1:{i:5;C:8:\"SplStack\":29:{i:4;:r:1;:O:8:\"stdClass\":0:{}}}}\nSTR;\nvar_dump(unserialize($s));\ngc_collect_cycles();\n?>")).toMatchSnapshot();
  });
});

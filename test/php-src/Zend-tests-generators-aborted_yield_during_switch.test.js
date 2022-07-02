// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/aborted_yield_during_switch.phpt
  it("Aborted yield during switch", function () {
    expect(parser.parseCode("<?php\nfunction gen($x) {\n    switch ($x.\"y\") {\n        default:\n            yield;\n    }\n}\n$gen = gen(\"x\");\n$gen->rewind();\n?>\n===DONE===")).toMatchSnapshot();
  });
});

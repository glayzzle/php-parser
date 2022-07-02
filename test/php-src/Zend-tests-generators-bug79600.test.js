// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug79600.phpt
  it("Bug #79600: Regression in 7.4.6 when yielding an array based generator", function () {
    expect(parser.parseCode("<?php\nfunction createArrayGenerator() {\n    yield from [\n        1,\n        2,\n    ];\n}\nfunction createGeneratorFromArrayGenerator() {\n    yield from createArrayGenerator();\n}\nforeach (createGeneratorFromArrayGenerator() as $value) {\n    echo $value, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/count_error.phpt
  it("Generators can't be counted", function () {
    expect(parser.parseCode("<?php\nfunction gen() { yield; }\n$gen = gen();\ntry {\n    count($gen);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

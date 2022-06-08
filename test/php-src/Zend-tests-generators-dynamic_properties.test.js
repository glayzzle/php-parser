// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/dynamic_properties.phpt
  it("It's not possible to assign dynamic properties on a generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield;\n}\n$gen = gen();\ntry {\n    $gen->prop = new stdClass;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

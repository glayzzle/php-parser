// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_non_iterable.phpt
  it("Yield from non-iterable", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield from new stdClass;\n}\ntry {\n    gen()->current();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

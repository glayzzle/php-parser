// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug51791.phpt
  it("Bug #51791 (constant() failed to check undefined constant and php interpreter stopped)", function () {
    expect(parser.parseCode("<?php\nclass A  {\n    const B = 1;\n}\ntry {\n    constant('A::B1');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/finally/yield_yield.phpt
  it("Try { yield } finally { yield }", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    try {\n        echo \"1\";\n        yield \"2\";\n        echo \"3\";\n    } finally {\n        echo \"4\";\n        yield \"5\";\n        echo \"6\";\n    }\n    echo \"7\";\n}\nforeach (foo() as $x) {\n    echo $x;\n}\n?>")).toMatchSnapshot();
  });
});

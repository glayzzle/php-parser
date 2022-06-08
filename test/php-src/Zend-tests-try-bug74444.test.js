// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug74444.phpt
  it("Bug #74444 (multiple catch freezes in some cases)", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    echo '';\n    try {\n        throw new \\RuntimeException();\n    } catch (\\FooEx  | \\RuntimeException $e) {\n        echo 1;\n    }\n    echo 2;\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});

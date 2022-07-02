// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33996.phpt
  it("Bug #33996 (No information given for fatal error on passing invalid value to typed argument)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    // nothing\n}\nfunction FooTest(Foo $foo)\n{\n    echo \"Hello!\";\n}\nfunction NormalTest($a)\n{\n    echo \"Hi!\";\n}\ntry {\n    NormalTest();\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    FooTest();\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\nFooTest(new Foo());\n?>")).toMatchSnapshot();
  });
});

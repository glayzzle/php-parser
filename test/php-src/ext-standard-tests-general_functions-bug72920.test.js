// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug72920.phpt
  it("Bug #72920 (Accessing a private constant using constant() creates an exception AND warning)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private const C1 = \"a\";\n}\ntry {\n    var_dump(constant('Foo::C1'));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

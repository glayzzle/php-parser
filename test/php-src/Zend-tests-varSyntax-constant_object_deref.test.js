// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/constant_object_deref.phpt
  it("Constants can be dereferenced as objects (even though they can't be objects)", function () {
    expect(parser.parseCode("<?php\nconst FOO = \"foo\";\nclass Bar { const FOO = \"foo\"; }\ntry {\n    FOO->length();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    Bar::FOO->length();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

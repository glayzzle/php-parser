// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-clone.phpt
  it("Enum disallows cloning", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\ntry {\n    var_dump(clone Foo::Bar);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

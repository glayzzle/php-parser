// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/internal_enums_strict_types.phpt
  it("Internal enums from/tryFrom in strict_types=1", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nvar_dump(ZendTestStringEnum::from(\"Test2\"));\ntry {\n    var_dump(ZendTestStringEnum::from(42));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(ZendTestStringEnum::tryFrom(43));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

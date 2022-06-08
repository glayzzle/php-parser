// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_name_as_scalar_error_007.phpt
  it("Cannot access self::class when no class scope is active", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(self::class);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump([self::class]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

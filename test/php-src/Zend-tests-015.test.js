// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/015.phpt
  it("trigger_error() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(trigger_error(\"error\"));\ntry {\n    var_dump(trigger_error(\"error\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(trigger_error(\"error\", 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(trigger_error(\"error\", E_USER_WARNING));\nvar_dump(trigger_error(\"error\", E_USER_DEPRECATED));\n?>")).toMatchSnapshot();
  });
});

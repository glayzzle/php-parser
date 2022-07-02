// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69315.phpt
  it("Bug #69315 (disable_functions behaviors inconsistently)", function () {
    expect(parser.parseCode("<?php\nvar_dump(function_exists(\"strlen\"));\nvar_dump(is_callable(\"strlen\"));\ntry {\n    var_dump(strlen(\"xxx\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(defined(\"PHP_VERSION\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(constant(\"PHP_VERSION\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(call_user_func(\"strlen\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(is_string(\"xxx\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(is_string());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

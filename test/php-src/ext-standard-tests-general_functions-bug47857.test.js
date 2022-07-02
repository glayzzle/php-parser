// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug47857.phpt
  it("Bug #47851 (is_callable throws fatal error)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function bar() {\n        echo \"ok\\n\";\n    }\n}\nvar_dump(is_callable(array('foo','bar')));\ntry {\n    foo::bar();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(is_callable(array('Exception','getMessage')));\ntry {\n    Exception::getMessage();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

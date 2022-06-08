// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33771.phpt
  it("Bug #33771 (error_reporting falls to 0 when @ was used inside try/catch block)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nvar_dump(error_reporting());\nfunction make_exception()\n{\n    throw new Exception();\n}\nfunction make_exception_and_change_err_reporting()\n{\n    error_reporting(E_ALL & ~E_NOTICE);\n    throw new Exception();\n}\ntry {\n    @make_exception();\n} catch (Exception $e) {}\nvar_dump(error_reporting());\ntry {\n    @make_exception_and_change_err_reporting();\n} catch (Exception $e) {}\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

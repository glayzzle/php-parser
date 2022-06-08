// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/error_reporting10.phpt
  it("testing @ and error_reporting - 10", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nfunction make_exception()\n{\n    @$blah;\n    error_reporting(0);\n    throw new Exception();\n}\ntry {\n    @make_exception();\n} catch (Exception $e) {}\nvar_dump(error_reporting());\nerror_reporting(E_ALL&~E_NOTICE);\ntry {\n    @make_exception();\n} catch (Exception $e) {}\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

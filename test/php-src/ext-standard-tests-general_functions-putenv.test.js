// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/putenv.phpt
  it("putenv() basic tests", function () {
    expect(parser.parseCode("<?php\n$var_name=\"SUCHVARSHOULDNOTEXIST\";\nvar_dump(getenv($var_name));\nvar_dump(putenv($var_name.\"=value\"));\nvar_dump(getenv($var_name));\nvar_dump(putenv($var_name.\"=\"));\nvar_dump(getenv($var_name));\nvar_dump(putenv($var_name));\nvar_dump(getenv($var_name));\ntry {\n    putenv(\"=123\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    putenv(\"\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

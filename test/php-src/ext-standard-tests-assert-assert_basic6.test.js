// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_basic6.phpt
  it("assert() - Remove the assert callback", function () {
    expect(parser.parseCode("<?php\nfunction f1()\n{\n    echo \"foo\\n\";\n}\nassert_options(ASSERT_CALLBACK, \"f1\");\nvar_dump(assert_options(ASSERT_CALLBACK));\ntry {\n    assert(false);\n} catch (AssertionError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\n\";\nassert_options(ASSERT_CALLBACK, null);\nvar_dump(assert_options(ASSERT_CALLBACK));\ntry {\n    assert(false);\n} catch (AssertionError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

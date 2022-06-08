// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34065.phpt
  it("Bug #34065 (throw in foreach causes memory leaks)", function () {
    expect(parser.parseCode("<?php\n$data = file(__FILE__);\ntry {\n  foreach ($data as $line) {\n    throw new Exception(\"error\");\n  }\n} catch (Exception $e) {\n  echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

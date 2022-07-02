// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/base_convert_error.phpt
  it("Test base_convert() function :  error conditions - incorrect input", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing base_convert() : error conditions ***\\n\";\n// get a class\nclass classA\n{\n}\ntry {\n    base_convert(1234, 1, 10);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    base_convert(1234, 10, 37);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    base_convert(new classA(), 8, 10);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

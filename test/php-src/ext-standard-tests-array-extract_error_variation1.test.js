// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_error_variation1.phpt
  it("Test extract() function - error condition - Invalid prefix.", function () {
    expect(parser.parseCode("<?php\n$a = [\"1\" => \"one\", \"2\" => \"two\", \"3\" => \"three\", \"4\" => \"four\", \"5\" => \"five\"];\ntry {\n    extract($a, EXTR_PREFIX_ALL, '85bogus');\n} catch (\\ValueError $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});

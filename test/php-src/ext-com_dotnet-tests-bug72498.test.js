// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug72498.phpt
  it("Bug #72498 variant_date_from_timestamp null dereference", function () {
    expect(parser.parseCode("<?php\n$v1 = PHP_INT_MAX;\ntry {\n    var_dump(variant_date_from_timestamp($v1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug78694.phpt
  it("Bug #78694 (Appending to a variant array causes segfault)", function () {
    expect(parser.parseCode("<?php\nforeach ([new com('WScript.Shell'), new variant([])] as $var) {\n    try {\n        $var[] = 42;\n    } catch (com_exception $ex) {\n        var_dump($ex->getMessage());\n    }\n}\n?>")).toMatchSnapshot();
  });
});

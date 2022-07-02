// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/iterable_003.phpt
  it("iterable type#003 - Return types", function () {
    expect(parser.parseCode("<?php\nfunction foo(): iterable {\n    return [];\n}\nfunction bar(): iterable {\n    return (function () { yield; })();\n}\nfunction baz(): iterable {\n    return 1;\n}\nvar_dump(foo());\nvar_dump(bar());\ntry {\n    baz();\n} catch (Throwable $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/func_sig_trailing_comma.phpt
  it("Trailing comma in function signatures", function () {
    expect(parser.parseCode("<?php\nfunction test(\n    $there,\n    $are,\n    $many,\n    $params,\n) {\n    echo \"Foo\\n\";\n}\nclass Test {\n    public function method(\n        $there,\n        $are,\n        $many,\n        $params,\n    ) {\n        echo \"Foo\\n\";\n    }\n}\n$func = function(\n    $there,\n    $are,\n    $many,\n    $params,\n) {\n    echo \"Foo\\n\";\n};\n$func = fn(\n    $there,\n    $shouldnt,\n    $be,\n    $many,\n    $params,\n) => print \"Foo\\n\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});

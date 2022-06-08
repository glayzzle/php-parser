// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77310_1.phpt
  it("Bug #77310 (1): Incorrect SCCP for compound assign to arrays", function () {
    expect(parser.parseCode("<?php\nfunction breakit($data_arr) {\n    $foo[0] = \"\";\n    for ($i = 0; $i < count($data_arr); $i++) {\n        $foo[0] .= $data_arr[$i];\n    }\n    echo $foo[0] . \"\\n\";\n}\n$data = ['zero', 'one', 'two'];\nbreakit($data);\n?>")).toMatchSnapshot();
  });
});

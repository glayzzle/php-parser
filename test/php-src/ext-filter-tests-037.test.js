// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/037.phpt
  it("GET and data callback tests", function () {
    expect(parser.parseCode("<?php\nfunction myfunc($val) {\n    return $val . '_callback';\n}\necho filter_input(INPUT_GET, 'a', FILTER_CALLBACK, array(\"options\"=>'myfunc'));\necho \"\\n\";\necho filter_input(INPUT_GET, 'b', FILTER_VALIDATE_INT);\necho \"\\n\";\n$data = \"data\";\necho filter_var($data, FILTER_CALLBACK, array(\"options\"=>'myfunc'));\necho \"\\n\";\n$res = filter_input_array(INPUT_GET, array(\n                'a' => array(\n                    'filter' => FILTER_CALLBACK,\n                    'options' => 'myfunc'\n                    ),\n                'b' => FILTER_VALIDATE_INT\n        )\n    );\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});

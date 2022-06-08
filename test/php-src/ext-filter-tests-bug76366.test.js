// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug76366.phpt
  it("Bug #76366 (references in sub-array for filtering breaks the filter)", function () {
    expect(parser.parseCode("<?php\n#array to filter\n$data = ['foo' => 6];\n#filter args\n$args = [\n    'foo'=> [\n        'filter' => FILTER_VALIDATE_INT,\n        'flags' => FILTER_FORCE_ARRAY\n    ]\n];\n$args['foo']['options'] = [];\n#create reference\n$options = &$args['foo']['options'];\n#set options\n$options['min_range'] = 1;\n$options['max_range'] = 5;\n#show the filter result\nvar_dump(filter_var_array($data, $args));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69723.phpt
  it("Bug #69723 (Passing parameters by reference and array_column)", function () {
    expect(parser.parseCode("<?php\nfunction byReference( & $array){\n    foreach($array as &$item){\n        $item['nanana'] = 'batman';\n        $item['superhero'] = 'robin';\n    }\n}\n$array = [\n    [\n    'superhero'=> 'superman',\n    'nanana' => 'no nana'\n    ],\n    [\n    'superhero'=> 'acuaman',\n    'nanana' => 'no nana'\n    ],\n    ];\nvar_dump(array_column($array, 'superhero'));\nbyReference($array);\nvar_dump(array_column($array, 'superhero'));\n?>")).toMatchSnapshot();
  });
});

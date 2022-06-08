// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_replace.phpt
  it("Test array_replace and array_replace_recursive", function () {
    expect(parser.parseCode("<?php\n$array1 = array(\n    0 => 'dontclobber',\n    '1' => 'unclobbered',\n    'test2' => 0.0,\n    'test3' => array(\n        'testarray2' => true,\n        1 => array(\n            'testsubarray1' => 'dontclobber2',\n            'testsubarray2' => 'dontclobber3',\n    ),\n    ),\n);\n$array2 = array(\n    1 => 'clobbered',\n    'test3' => array(\n        'testarray2' => false,\n    ),\n    'test4' => array(\n        'clobbered3' => array(0, 1, 2),\n    ),\n);\n$array3 = array(array(array(array())));\n$array4 = array();\n$array4[] = &$array4;\necho \" -- Testing array_replace() --\\n\";\n$data = array_replace($array1, $array2);\nvar_dump($data);\necho \" -- Testing array_replace_recursive() --\\n\";\n$data = array_replace_recursive($array1, $array2);\nvar_dump($data);\necho \" -- Testing array_replace_recursive() w/ endless recusrsion --\\n\";\ntry {\n    $data = array_replace_recursive($array3, $array4);\n    var_dump($data);\n} catch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

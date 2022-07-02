// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60362.phpt
  it("Bug #60362: non-existent sub-sub keys should not have values", function () {
    expect(parser.parseCode("<?php\n$arr = array('exists' => 'foz');\nif (isset($arr['exists']['non_existent'])) {\n    echo \"sub-key 'non_existent' is set: \";\n    var_dump($arr['exists']['non_existent']);\n} else {\n    echo \"sub-key 'non_existent' is not set.\\n\";\n}\nif (isset($arr['exists'][1])) {\n    echo \"sub-key 1 is set: \";\n    var_dump($arr['exists'][1]);\n} else {\n    echo \"sub-key 1 is not set.\\n\";\n}\necho \"-------------------\\n\";\nif (isset($arr['exists']['non_existent']['sub_sub'])) {\n    echo \"sub-key 'sub_sub' is set: \";\n    var_dump($arr['exists']['non_existent']['sub_sub']);\n} else {\n    echo \"sub-sub-key 'sub_sub' is not set.\\n\";\n}\nif (isset($arr['exists'][1][0])) {\n    echo \"sub-sub-key 0 is set: \";\n    var_dump($arr['exists'][1][0]);\n} else {\n    echo \"sub-sub-key 0 is not set.\\n\";\n}\necho \"-------------------\\n\";\nif (empty($arr['exists']['non_existent'])) {\n    echo \"sub-key 'non_existent' is empty.\\n\";\n} else {\n    echo \"sub-key 'non_existent' is not empty: \";\n    var_dump($arr['exists']['non_existent']);\n}\nif (empty($arr['exists'][1])) {\n    echo \"sub-key 1 is empty.\\n\";\n} else {\n    echo \"sub-key 1 is not empty: \";\n    var_dump($arr['exists'][1]);\n}\necho \"-------------------\\n\";\nif (empty($arr['exists']['non_existent']['sub_sub'])) {\n    echo \"sub-sub-key 'sub_sub' is empty.\\n\";\n} else {\n    echo \"sub-sub-key 'sub_sub' is not empty: \";\n    var_dump($arr['exists']['non_existent']['sub_sub']);\n}\nif (empty($arr['exists'][1][0])) {\n    echo \"sub-sub-key 0 is empty.\\n\";\n} else {\n    echo \"sub-sub-key 0 is not empty: \";\n    var_dump($arr['exists'][1][0]);\n}\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});

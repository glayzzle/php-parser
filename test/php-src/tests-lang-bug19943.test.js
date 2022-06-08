// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug19943.phpt
  it("Bug #19943 (memleaks)", function () {
    expect(parser.parseCode("<?php\n    $ar = array();\n    for ($count = 0; $count < 10; $count++) {\n        $ar[$count]        = \"$count\";\n        @$ar[$count]['0idx'] = \"$count\";\n    }\n    for ($count = 0; $count < 10; $count++) {\n        echo $ar[$count].\" -- \".@$ar[$count]['0idx'].\"\\n\";\n    }\n    $a = \"0123456789\";\n    $a[9] = $a[0];\n    var_dump($a);\n?>")).toMatchSnapshot();
  });
});

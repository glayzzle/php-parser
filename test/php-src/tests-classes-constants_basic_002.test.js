// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_basic_002.phpt
  it("Basic class support - defining and reading a class constant.", function () {
    expect(parser.parseCode("<?php\n  class aclass\n  {\n      const myConst = \"hello\";\n  }\n  echo \"\\nRead class constant.\\n\";\n  var_dump(aclass::myConst);\n  echo \"\\nFail to read class constant from instance.\\n\";\n  $myInstance = new aclass();\n  var_dump($myInstance->myConst);\n  echo \"\\nClass constant not visible in object var_dump.\\n\";\n  var_dump($myInstance)\n?>")).toMatchSnapshot();
  });
});

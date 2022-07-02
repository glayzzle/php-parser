// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug30266.phpt
  it("Bug #30266 (Invalid opcode 137/1/8) and array_walk", function () {
    expect(parser.parseCode("<?php\nclass testc\n{\n    public $b = \"c\";\n    function crash($val)\n    {\n        $this->b = $val;\n        throw new Exception(\"Error\");\n    }\n}\n$fruits = array (\"d\"=>\"lemon\", \"a\"=>\"orange\", \"b\"=>\"banana\", \"c\"=>\"apple\");\n$myobj = new testc();\nfunction test($item2, $key, $userd)\n{\n    $userd->crash($item2);\n}\ntry\n{\n    array_walk($fruits, 'test', $myobj);\n}\ncatch(Exception $e)\n{\n    echo \"Caught: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

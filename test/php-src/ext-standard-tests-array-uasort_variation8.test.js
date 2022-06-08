// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/uasort_variation8.phpt
  it("Test uasort() function : usage variations - built-in function as 'cmp_function'", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing different built-in library functions in place of 'cmp_function'\n*   valid comparison functions: strcmp() & strcasecmp()\n*/\necho \"*** Testing uasort() : built in function as 'cmp_function' ***\\n\";\n// Initializing variables\n$array_arg = array(\"b\" => \"Banana\", \"m\" => \"Mango\", \"a\" => \"apple\", \"p\" => \"Pineapple\", \"o\" => \"orange\");\n$builtin_fun_arg = $array_arg;\n$languageConstruct_fun_arg = $array_arg;\n// Testing library functions as comparison function\necho \"-- Testing uasort() with built-in 'cmp_function': strcasecmp() --\\n\";\nvar_dump( uasort($builtin_fun_arg, 'strcasecmp') );  // expecting: bool(true)\nvar_dump($builtin_fun_arg);\necho \"-- Testing uasort() with built-in 'cmp_function': strcmp() --\\n\";\nvar_dump( uasort($array_arg, 'strcmp') );  // expecting: bool(true)\nvar_dump($array_arg);\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});

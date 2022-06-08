// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.009.phpt
  it("Returning a references returned by another function", function () {
    expect(parser.parseCode("<?php\nfunction &returnVarByRef () {\n    $b=1;\n    return $b;\n}\nfunction &testReturnVarByRef() {\n    return returnVarByRef();\n}\nfunction returnVal () {\nreturn 1;\n}\nfunction &testReturnValByRef() {\n    return returnVal();\n}\necho \"\\n---> 1. Return a variable by reference -> No warning:\\n\";\nvar_dump (testReturnVarByRef());\necho \"\\n---> 2. Return a value by reference -> Warning:\\n\";\nvar_dump (testReturnValByRef());\n?>")).toMatchSnapshot();
  });
});

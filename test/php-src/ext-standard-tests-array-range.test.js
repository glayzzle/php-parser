// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/range.phpt
  it("Test range() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing range() function on basic operations ***\\n\";\necho \"\\n-- Integers as Low and High --\\n\";\necho \"-- An array of elements from low to high --\\n\";\nvar_dump( range(1, 10) );\necho \"\\n-- An array of elements from high to low --\\n\";\nvar_dump( range(10, 1) );\necho \"\\n-- Numeric Strings as Low and High --\\n\";\necho \"-- An array of elements from low to high --\\n\";\nvar_dump( range(\"1\", \"10\") );\necho \"\\n-- An array of elements from high to low --\\n\";\nvar_dump( range(\"10\", \"1\") );\necho \"\\n-- Chars as Low and High --\\n\";\necho \"-- An array of elements from low to high --\\n\";\nvar_dump( range(\"a\", \"z\") );\necho \"\\n-- An array of elements from high to low --\\n\";\nvar_dump( range(\"z\", \"a\") );\necho \"\\n-- Low and High are equal --\\n\";\nvar_dump( range(5, 5) );\nvar_dump( range(\"q\", \"q\") );\necho \"\\n-- floats as Low and High --\\n\";\nvar_dump( range(5.1, 10.1) );\nvar_dump( range(10.1, 5.1) );\nvar_dump( range(\"5.1\", \"10.1\") );\nvar_dump( range(\"10.1\", \"5.1\") );\necho \"\\n-- Passing step with Low and High --\\n\";\nvar_dump( range(1, 2, 0.1) );\nvar_dump( range(2, 1, 0.1) );\nvar_dump( range(1, 2, \"0.1\") );\nvar_dump( range(\"1\", \"2\", 0.1) );\necho \"\\n-- Testing basic string with step --\\n\";\nvar_dump( range(\"abcd\", \"mnop\", 2) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

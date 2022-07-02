// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/trim1.phpt
  it("Test trim() function", function () {
    expect(parser.parseCode("<?php\n/* trim with unset/null/boolean variable - returns an empty string */\necho \"\\n\";\n$null_var = \"\";\nvar_dump( trim($null_var) );\n$null_var = 0;\nvar_dump( trim($null_var) );\n$bool_val = true;\nvar_dump( trim($null_var) );\n/* second argument charlist as empty - does not trim any white spaces */\nvar_dump( trim(\"\\ttesting trim\", \"\") );\nvar_dump( trim(\"\\ttesting trim  \", true) );\n/* Use of class and objects */\necho \"\\n*** Testing with OBJECTS ***\\n\";\nclass string1\n{\n  public function __toString() {\n    return \"Object\";\n  }\n}\n$obj = new string1;\nvar_dump( trim($obj, \"Ot\") );\n/* String with embedded NULL */\necho \"\\n*** Testing with String with embedded NULL ***\\n\";\nvar_dump( trim(\"\\x0n1234\\x0005678\\x0000efgh\\xijkl\\x0n1\", \"\\x0n1\") );\n/* heredoc string */\n$str = <<<EOD\nus\ning heredoc string\nEOD;\necho \"\\n*** Testing with heredoc string ***\\n\";\nvar_dump( trim($str, \"us\\ning\") );\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substitute_character_basic.phpt
  it("Test mb_substitute_character() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_substitute_character() : basic functionality ***\\n\";\n// Initialise all required variables\nvar_dump( mb_substitute_character() );\nvar_dump( mb_substitute_character(66) );\nvar_dump( mb_substitute_character() );\nvar_dump( mb_substitute_character(1234) );\nvar_dump( mb_substitute_character() );\nvar_dump( mb_substitute_character('none') );\nvar_dump( mb_substitute_character() );\n// Check string case insensitivity\nvar_dump( mb_substitute_character('LoNg') );\nvar_dump( mb_substitute_character() );\ntry {\n    var_dump( mb_substitute_character(\"b\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

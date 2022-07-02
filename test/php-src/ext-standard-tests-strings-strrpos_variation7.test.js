// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_variation7.phpt
  it("Test strrpos() function : usage variations - empty heredoc string for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strrpos() function by passing empty heredoc string for haystack\n *  and with various needles & offsets\n*/\necho \"*** Testing strrpos() function: with heredoc strings ***\\n\";\necho \"-- With empty heredoc string --\\n\";\n$empty_string = <<<EOD\nEOD;\nvar_dump( strrpos($empty_string, \"\") );\ntry {\n    strrpos($empty_string, \"\", 1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump( strrpos($empty_string, FALSE) );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});

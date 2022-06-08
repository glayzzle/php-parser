// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation17.phpt
  it("Test token_get_all() function : usage variations - with exception keywords", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing token_get_all() with different exception keywords\n *   try - T_TRY(336),\n *   catch - T_CATCH(337),\n *   throw - T_THROW(338)\n*/\necho \"*** Testing token_get_all() : with exception keywords ***\\n\";\n$source = '<?php\nfunction inverse($x)\n{\n  if($x == 0) {\n    throw new Exception(\"Division by zero\");\n  else\n    return 1/$x;\n}\ntry {\n  echo inverse(0);\n  echo inverse(5);\n} catch(Exception $e) {\n    echo \"caught exception:\";\n}\n}\n?>';\n$tokens =  token_get_all($source);\nvar_dump($tokens);\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});

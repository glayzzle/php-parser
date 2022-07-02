// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_arg_variation.phpt
  it("func_get_arg test", function () {
    expect(parser.parseCode("<?php\nfunction foo($a)\n{\n   $a=5;\n   try {\n       echo func_get_arg(-1);\n   } catch (\\Error $e) {\n       echo $e->getMessage() . \\PHP_EOL;\n   }\n   try {\n       echo func_get_arg(2);\n   } catch (\\Error $e) {\n       echo $e->getMessage() . \\PHP_EOL;\n   }\n}\nfoo(2);\n?>")).toMatchSnapshot();
  });
});

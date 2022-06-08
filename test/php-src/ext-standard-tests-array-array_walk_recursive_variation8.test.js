// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive_variation8.phpt
  it("Test array_walk_recursive() function : usage variations - buit-in function as callback", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing different buit-in functionns as callback function\n *    pow function\n *    min function\n *    echo language construct\n*/\necho \"*** Testing array_walk_recursive() : built-in function as callback ***\\n\";\n$input = array(array(2 => 1, 65), array(98, 100), array(6 => -4));\necho \"-- With 'pow' built-in function --\\n\";\nvar_dump( array_walk_recursive($input, 'pow'));\necho \"-- With 'min' built-in function --\\n\";\nvar_dump( array_walk_recursive($input, \"min\"));\necho \"-- With 'echo' language construct --\\n\";\ntry {\n    var_dump( array_walk_recursive($input, \"echo\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});

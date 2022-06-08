// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_all_error2.phpt
  it("Test preg_match_all() function : error conditions - wrong arg types", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n/*\n* Testing how preg_match_all reacts to being passed the wrong type of input argument\n*/\necho \"*** Testing preg_match_all() : error conditions ***\\n\";\n$regex = '/[a-zA-Z]/';\n$input = array(array('this is', 'a subarray'), 'test',);\nforeach($input as $value) {\n    @print \"\\nArg value is: $value\\n\";\n    try {\n        var_dump(preg_match_all($regex, $value, $matches));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    var_dump($matches);\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

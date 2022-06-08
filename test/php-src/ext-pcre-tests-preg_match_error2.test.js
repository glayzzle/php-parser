// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_error2.phpt
  it("Test preg_match() function : error conditions - wrong arg types", function () {
    expect(parser.parseCode("<?php\n/* Function is implemented in ext/pcre/php_pcre.c */\n/*\n* Testing how preg_match reacts to being passed the wrong type of subject argument\n*/\necho \"*** Testing preg_match() : error conditions ***\\n\";\n$regex = '/[a-zA-Z]/';\n$input = array('this is a string', array('this is', 'a subarray'),);\nforeach($input as $value) {\n    @print \"\\nArg value is: $value\\n\";\n    try {\n        var_dump(preg_match($regex, $value));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n$value = new stdclass(); //Object\ntry {\n    var_dump(preg_match($regex, $value));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

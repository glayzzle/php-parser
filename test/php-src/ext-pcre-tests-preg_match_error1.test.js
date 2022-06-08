// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_error1.phpt
  it("Test preg_match() function : error conditions - bad regular expressions", function () {
    expect(parser.parseCode("<?php\n/* Function is implemented in ext/pcre/php_pcre.c */\n/*\n* Testing how preg_match reacts to being passed the wrong type of regex argument\n*/\necho \"*** Testing preg_match() : error conditions ***\\n\";\n$regex_array = array('abcdef', //Regex without delimiter\n'/[a-zA-Z]', //Regex without closing delimiter\n'[a-zA-Z]/', //Regex without opening delimiter\n'/[a-zA-Z]/F', array('[a-z]', //Array of Regexes\n'[A-Z]', '[0-9]'), '/[a-zA-Z]/', //Regex string\n);\n$subject = 'this is a test';\nforeach($regex_array as $regex_value) {\n    @print \"\\nArg value is $regex_value\\n\";\n    try {\n        var_dump(preg_match($regex_value, $subject));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n$regex_value = new stdclass(); //Object\ntry {\n    var_dump(preg_match($regex_value, $subject));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

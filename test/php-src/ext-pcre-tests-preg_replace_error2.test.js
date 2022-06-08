// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_error2.phpt
  it("Test preg_replace() function : error conditions - wrong arg types", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n/*\n* Testing how preg_replace reacts to being passed the wrong type of replacement argument\n*/\necho \"*** Testing preg_replace() : error conditions ***\\n\";\n$regex = '/[a-zA-Z]/';\n$replace = array('this is a string', array('this is', 'a subarray'),);\n$subject = 'test';\nforeach($replace as $value) {\n    @print \"\\nArg value is: $value\\n\";\n    try {\n        var_dump(preg_replace($regex, $value, $subject));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n$value = new stdclass(); //Object\ntry {\n    var_dump(preg_replace($regex, $value, $subject));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

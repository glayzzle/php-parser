// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_grep_error1.phpt
  it("Test preg_grep() function : error conditions - bad regular expressions", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n/*\n* Testing how preg_grep reacts to being passed bad regexes\n*/\necho \"*** Testing preg_grep() : error conditions ***\\n\";\n$values = array('abcdef', //Regex without delimiter\n'/[a-zA-Z]', //Regex without closing delimiter\n'[a-zA-Z]/', //Regex without opening delimiter\n'/[a-zA-Z]/F', array('[a-z]', //Array of Regexes\n'[A-Z]', '[0-9]'), '/[a-zA-Z]/', //Regex string\n);\n$array = array(123, 'abc', 'test');\nforeach($values as $value) {\n    @print \"\\nArg value is $value\\n\";\n    try {\n        var_dump(preg_grep($value, $array));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n$value = new stdclass(); //Object\ntry {\n    var_dump(preg_grep($value, $array));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});

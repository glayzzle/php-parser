// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback_error1.phpt
  it("Test preg_replace_callback() function : error", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n/*\n* Testing how preg_replace_callback reacts to being passed the wrong type of regex argument\n*/\necho \"*** Testing preg_replace_callback() : error conditions ***\\n\";\n$regex_array = array('abcdef', //Regex without delimiters\n'/[a-zA-Z]', //Regex without closing delimiter\n'[a-zA-Z]/', //Regex without opening delimiter\n'/[a-zA-Z]/F', array('[a-z]', //Array of Regexes\n'[A-Z]', '[0-9]'), '/[0-9]/'); //Regex string\n$replacement = array('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine');\nfunction integer_word($matches) {\n    global $replacement;\n    return $replacement[$matches[0]];\n}\n$subject = 'number 1.';\nforeach($regex_array as $regex_value) {\n    @print \"\\nArg value is $regex_value\\n\";\n    var_dump(preg_replace_callback($regex_value, 'integer_word', $subject));\n}\n?>")).toMatchSnapshot();
  });
});

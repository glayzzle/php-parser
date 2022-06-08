// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback_basic.phpt
  it("Test preg_replace_callback() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n/*\n* Basic test for preg_replace_callback\n*/\n$replacement = array('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'); //array will have the default key values (0-9) and each value is the corresponding key written in words.\nfunction integer_word($matches) {\n    global $replacement;\n    return $replacement[$matches[0]]; //all examples will be looking for an integer value, if one is found it will be stored in $matches[0] which corresponds to a key in the $replacements array\n}\n$subject1 = 'there are 7 words in this sentence.';\n$new_subject1 = preg_replace_callback('/\\d/', \"integer_word\", $subject1);\nprint \"$new_subject1 \\n\";\n$subject2 = '1 2 3 4 is now written in words';\n$new_subject2 = preg_replace_callback('/\\d/', \"integer_word\", $subject2, 3); //limits to three replacements\nprint \"$new_subject2 \\n\";\n$subject3 = 'there are no numbers in this string';\n$new_subject3 = preg_replace_callback('/\\d/', \"integer_word\", $subject3, 5, $count); //limites to five replacements and counts the number of replacements made ands stores in $count variable\nprint \"$new_subject3 \\n\";\nprint $count;\n?>")).toMatchSnapshot();
  });
});

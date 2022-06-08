// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strtolower_variation4.phpt
  it("Test mb_strtolower() function : usage variations - pass different characters to check conversion is correct", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass accented characters and Russian characters to check case conversion is correct\n */\necho \"*** Testing mb_strtolower() :  usage variations ***\\n\";\n$uppers = array('Basic Latin' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',\n                'Characters With Accents' => base64_decode('w4DDgcOCw4PDhMOFw4bDh8OIw4nDisOLw4zDjcOOw4/DkMORw5LDk8OUw5XDlg=='),\n                'Russian' => base64_decode('0JDQkdCS0JPQlNCV0JbQlw=='));\n$lowers = array('Basic Latin' => 'abcdefghijklmnopqrstuvwxyz',\n                'Characters With Accents' => base64_decode('w6DDocOiw6PDpMOlw6bDp8Oow6nDqsOrw6zDrcOuw6/DsMOxw7LDs8O0w7XDtg=='),\n                'Russian' => base64_decode('0LDQsdCy0LPQtNC10LbQtw=='));\nforeach ($uppers as $lang => $sourcestring) {\n    echo \"\\n-- $lang --\\n\";\n    $a = mb_strtolower($sourcestring, 'utf-8');\n    var_dump(base64_encode($a));\n    if ($a == $lowers[$lang]) {\n        echo \"Correctly Converted\\n\";\n    } else {\n        echo \"Incorrectly Converted\\n\";\n    }\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

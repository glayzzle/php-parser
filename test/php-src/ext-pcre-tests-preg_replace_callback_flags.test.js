// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback_flags.phpt
  it("Support for flags in preg_replace_callback(_array)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_replace_callback('/./', function($matches) {\n    var_dump($matches);\n    return $matches[0][0];\n}, 'abc', -1, $count, PREG_OFFSET_CAPTURE));\necho \"\\n\";\nvar_dump(preg_replace_callback_array(\n    ['/./' => function($matches) {\n        var_dump($matches);\n        return $matches[0][0];\n    }],\n    'abc', -1, $count, PREG_OFFSET_CAPTURE)\n);\necho \"\\n\";\nvar_dump(preg_replace_callback('/(a)|(b)/', function($matches) {\n    var_dump($matches);\n    return $matches[0];\n}, 'abc', -1, $count, PREG_UNMATCHED_AS_NULL));\necho \"\\n\";\nvar_dump(preg_replace_callback_array(\n    ['/(a)|(b)/' => function($matches) {\n        var_dump($matches);\n        return $matches[0];\n    }],\n    'abc', -1, $count, PREG_UNMATCHED_AS_NULL)\n);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});

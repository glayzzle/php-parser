// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback.phpt
  it("preg_replace_callback()", function () {
    expect(parser.parseCode("<?php\n$input = \"plain [indent] deep [indent] [abcd]deeper[/abcd] [/indent] deep [/indent] plain\";\nfunction parseTagsRecursive($input)\n{\n    $regex = '#\\[indent]((?:[^[]|\\[(?!/?indent])|(?R))+)\\[/indent]#';\n    if (is_array($input)) {\n        $input = '<div style=\"margin-left: 10px\">'.$input[1].'</div>';\n    }\n    return preg_replace_callback($regex, 'parseTagsRecursive', $input);\n}\n$output = parseTagsRecursive($input);\necho $output, \"\\n\";\n?>")).toMatchSnapshot();
  });
});

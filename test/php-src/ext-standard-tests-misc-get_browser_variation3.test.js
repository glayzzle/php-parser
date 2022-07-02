// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/get_browser_variation3.phpt
  it("Test get_browser() against a larger corpus", function () {
    expect(parser.parseCode("<?php\n$lst = file(__DIR__ . \"/user_agents.txt\", FILE_IGNORE_NEW_LINES);\nforeach ($lst as $agent) {\n    $pattern = get_browser($agent, true)['browser_name_pattern'];\n    echo \"Agent $agent\\n    Matched by: $pattern\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

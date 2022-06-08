// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags.phpt
  it("strip_tags() function", function () {
    expect(parser.parseCode("<?php\n    echo strip_tags('NEAT <? cool < blah ?> STUFF');\n    echo \"\\n\";\n    echo strip_tags('NEAT <? cool > blah ?> STUFF');\n    echo \"\\n\";\n    echo strip_tags('NEAT <!-- cool < blah --> STUFF');\n    echo \"\\n\";\n    echo strip_tags('NEAT <!-- cool > blah --> STUFF');\n    echo \"\\n\";\n    echo strip_tags('NEAT <? echo \\\"\\\\\\\"\\\"?> STUFF');\n    echo \"\\n\";\n    echo strip_tags('NEAT <? echo \\'\\\\\\'\\'?> STUFF');\n    echo \"\\n\";\n    echo strip_tags('TESTS ?!!?!?!!!?!!');\n    echo \"\\n\";\n?>")).toMatchSnapshot();
  });
});

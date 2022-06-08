// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug79062.phpt
  it("Bug #79062: Property with heredoc default value returns false for getDocComment", function () {
    expect(parser.parseCode("<?php\nclass BugReportMailrcConfigTests\n{\n    /** @var string */\n    private $s1 = <<<STRING\nI'm a string :(\nSTRING;\n    /** @var string */\n    private $s2 = <<<'STRING'\nI'm a string :)\nSTRING;\n    /** @var string */\n    private $s3 = 'I\\'m a string :)';\n}\n$ref = new \\ReflectionClass(BugReportMailrcConfigTests::class);\n$s1 = $ref->getProperty('s1');\nvar_dump($s1->getDocComment());\n$s2 = $ref->getProperty('s2');\nvar_dump($s2->getDocComment());\n$s3 = $ref->getProperty('s3');\nvar_dump($s2->getDocComment());\n?>")).toMatchSnapshot();
  });
});

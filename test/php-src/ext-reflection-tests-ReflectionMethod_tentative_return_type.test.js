// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_tentative_return_type.phpt
  it("ReflectionMethod returns tentative return type information correctly", function () {
    expect(parser.parseCode("<?php\nclass MyDateTimeZone extends DateTimeZone\n{\n    #[ReturnTypeWillChange]\n    public static function listIdentifiers(int $timezoneGroup = DateTimeZone::ALL, ?string $countryCode = null): string\n    {\n        return \"\";\n    }\n}\nfunction printInfo(ReflectionMethod $methodInfo) {\n    var_dump($methodInfo->hasReturnType());\n    var_dump($methodInfo->hasTentativeReturnType());\n    var_dump((string) $methodInfo->getReturnType());\n    var_dump((string) $methodInfo->getTentativeReturnType());\n    var_dump((string) $methodInfo);\n    echo \"\\n\";\n}\nprintInfo(new ReflectionMethod(DateTimeZone::class, 'listIdentifiers'));\nprintInfo(new ReflectionMethod(MyDateTimeZone::class, 'listIdentifiers'));\nprintInfo(new ReflectionMethod(FileSystemIterator::class, 'current'));\n?>")).toMatchSnapshot();
  });
});

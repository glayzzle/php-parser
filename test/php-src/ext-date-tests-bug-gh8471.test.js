// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug-gh8471.phpt
  it("Bug GH-8471: Segmentation fault when converting immutable and mutable DateTime instances created using reflection", function () {
    expect(parser.parseCode("<?php\n$reflection = new ReflectionClass('\\DateTime');\n$mutable = $reflection->newInstanceWithoutConstructor();\ntry {\n\t$immutable = \\DateTimeImmutable::createFromMutable($mutable);\n} catch (Throwable $t) {\n\techo $t->getMessage(), \"\\n\";\n}\n$reflection = new ReflectionClass('\\DateTime');\n$mutable = $reflection->newInstanceWithoutConstructor();\ntry {\n\t$immutable = \\DateTimeImmutable::createFromInterface($mutable);\n} catch (Throwable $t) {\n\techo $t->getMessage(), \"\\n\";\n}\n$reflection = new ReflectionClass('\\DateTimeImmutable');\n$immutable = $reflection->newInstanceWithoutConstructor();\ntry {\n\t$mutable = \\DateTime::createFromImmutable($immutable);\n} catch (Throwable $t) {\n\techo $t->getMessage(), \"\\n\";\n}\n$reflection = new ReflectionClass('\\DateTimeImmutable');\n$immutable = $reflection->newInstanceWithoutConstructor();\ntry {\n\t$mutable = \\DateTime::createFromInterface($immutable);\n} catch (Throwable $t) {\n\techo $t->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

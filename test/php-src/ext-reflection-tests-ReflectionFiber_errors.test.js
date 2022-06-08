// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFiber_errors.phpt
  it("ReflectionFiber errors", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend();\n});\n$reflection = new ReflectionFiber($fiber);\ntry {\n    $reflection->getTrace();\n} catch (Error $error) {\n    echo $error->getMessage(), \"\\n\";\n}\ntry {\n    $reflection->getExecutingFile();\n} catch (Error $error) {\n    echo $error->getMessage(), \"\\n\";\n}\ntry {\n    $reflection->getExecutingLine();\n} catch (Error $error) {\n    echo $error->getMessage(), \"\\n\";\n}\n$fiber->start();\nvar_dump($reflection->getExecutingFile());\nvar_dump($reflection->getExecutingLine());\n$fiber->resume();\ntry {\n    $reflection->getTrace();\n} catch (Error $error) {\n    echo $error->getMessage(), \"\\n\";\n}\ntry {\n    $reflection->getExecutingFile();\n} catch (Error $error) {\n    echo $error->getMessage(), \"\\n\";\n}\ntry {\n    $reflection->getExecutingLine();\n} catch (Error $error) {\n    echo $error->getMessage(), \"\\n\";\n}\ntry {\n    $reflection->getCallable();\n} catch (Error $error) {\n    echo $error->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

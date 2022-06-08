// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_invalidMethodInConstructor.phpt
  it("ReflectionParameter::__construct(): Invalid method as constructor", function () {
    expect(parser.parseCode("<?php\n// Invalid class name\ntry {\n    new ReflectionParameter (array ('A', 'b'), 0);\n} catch (ReflectionException $e) { echo $e->getMessage().\"\\n\"; }\n// Invalid class method\ntry {\n    new ReflectionParameter (array ('C', 'b'), 0);\n} catch (ReflectionException $e) { echo $e->getMessage ().\"\\n\"; }\n// Invalid object method\ntry {\n    new ReflectionParameter (array (new C, 'b'), 0);\n} catch (ReflectionException $e) { echo $e->getMessage ().\"\\n\"; }\nclass C {\n}\ntry {\n    new ReflectionParameter(array ('A', 'b'));\n}\ncatch(TypeError $e) {\n    printf( \"Ok - %s\\n\", $e->getMessage());\n}\ntry {\n    new ReflectionParameter(0, 0);\n}\ncatch(ReflectionException $e) {\n    printf( \"Ok - %s\\n\", $e->getMessage());\n}\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});

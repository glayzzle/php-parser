// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/basic_yield_from_exception_handling.phpt
  it("Exceptions in linear yield from setup", function () {
    expect(parser.parseCode("<?php\nfunction from($off) {\n    try {\n        yield $off + 1;\n    } catch (Exception $e) { print \"catch in from()\\n$e\\n\"; }\n    yield $off + 2;\n}\nfunction gen() {\n    try {\n        yield \"gen\" => 0;\n    } catch (Exception $e) { print \"catch in gen()\\n$e\\n\"; }\n    try {\n        yield from from(0);\n    } catch (Exception $e) { print \"catch in gen()\\n$e\\n\"; }\n    yield from from(2);\n}\n$i = 0;\ntry {\n    for ($gen = gen(); $gen->valid(); $gen->throw(new Exception((string) $i++))) {\n        var_dump($gen->current());\n    }\n} catch (Exception $e) { print \"catch in {main}\\n$e\\n\"; }\nvar_dump($gen->valid());\n?>")).toMatchSnapshot();
  });
});

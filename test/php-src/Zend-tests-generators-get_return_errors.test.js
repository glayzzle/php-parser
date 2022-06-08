// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/get_return_errors.phpt
  it("Generator::getReturn() error cases", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    yield 1;\n    yield 2;\n    return 3;\n}\n$gen = gen1();\ntry {\n    // Generator hasn't reached the \"return\" yet\n    $gen->getReturn();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nfunction gen2() {\n    throw new Exception(\"gen2() throw\");\n    yield 1;\n    return 2;\n}\n$gen = gen2();\ntry {\n    $gen->next();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    // Generator has been aborted as a result of an exception\n    $gen->getReturn();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nfunction gen3() {\n    throw new Exception(\"gen3() throw\");\n    return 1;\n    yield 2;\n}\n$gen = gen3();\ntry {\n    // Generator throws during auto-priming of getReturn() call\n    $gen->getReturn();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nfunction gen4() {\n    yield;\n    return 1;\n}\n$gen = gen4();\ntry {\n    $gen->throw(new Exception(\"gen4() throw\"));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    // Generator has been aborted as a result of an exception\n    // that was injected using throw()\n    $gen->getReturn();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

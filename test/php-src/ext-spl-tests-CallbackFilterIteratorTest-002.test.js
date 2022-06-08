// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/CallbackFilterIteratorTest-002.phpt
  it("CallbackFilterIterator 002", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($errno, $errstr){\n    echo $errstr . \"\\n\";\n    return true;\n});\ntry {\n    new CallbackFilterIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    new CallbackFilterIterator(null);\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    new CallbackFilterIterator(new ArrayIterator(array()), null);\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    new CallbackFilterIterator(new ArrayIterator(array()), array());\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$it = new CallbackFilterIterator(new ArrayIterator(array(1)), function() {\n    throw new Exception(\"some message\");\n});\ntry {\n    foreach($it as $e);\n} catch(Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

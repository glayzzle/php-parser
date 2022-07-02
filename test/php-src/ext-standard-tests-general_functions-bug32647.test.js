// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug32647.phpt
  it("Bug #32647 (Using register_shutdown_function() with invalid callback can crash PHP)", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n  echo \"foo!\\n\";\n}\nclass bar\n{\n    function barfoo ()\n    { echo \"bar!\\n\"; }\n}\nunset($obj);\ntry {\n    register_shutdown_function(array($obj,\"\"));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    register_shutdown_function(array($obj,\"some string\"));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    register_shutdown_function(array(0,\"\"));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    register_shutdown_function(array('bar','foo'));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    register_shutdown_function(array(0,\"some string\"));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    register_shutdown_function('bar');\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nregister_shutdown_function('foo');\ntry {\n    register_shutdown_function(array('bar','barfoo'));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$obj = new bar;\ntry {\n    register_shutdown_function(array($obj,'foobar'));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nregister_shutdown_function(array($obj,'barfoo'));\n?>")).toMatchSnapshot();
  });
});

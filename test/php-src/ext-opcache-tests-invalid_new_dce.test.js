// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/invalid_new_dce.phpt
  it("Throwings NEWs should not be DCEd", function () {
    expect(parser.parseCode("<?php\nabstract class Foo {}\ninterface Bar {}\ntrait Baz {}\nclass Abc {\n    const BAR = Abc::BAR;\n}\nfunction test1() {\n    $x = new Foo;\n}\nfunction test2() {\n    $x = new Bar;\n}\nfunction test3() {\n    $x = new Baz;\n}\nfunction test4() {\n    $x = new Abc;\n}\ntry { test1(); } catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\ntry { test2(); } catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\ntry { test3(); } catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\ntry { test4(); } catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\n?>")).toMatchSnapshot();
  });
});

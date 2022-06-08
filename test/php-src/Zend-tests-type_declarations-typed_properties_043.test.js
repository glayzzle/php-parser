// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_043.phpt
  it("Trying to assign to a static 'self' typed property on a trait must not fixate the type to the trait", function () {
    expect(parser.parseCode("<?php\ntrait Test {\n    public static self $selfProp;\n    public static ?self $selfNullProp;\n    public static parent $parentProp;\n}\ntry {\n    Test::$selfProp = new stdClass;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    Test::$selfNullProp = new stdClass;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    Test::$parentProp = new stdClass;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nTest::$selfNullProp = null;\nvar_dump(Test::$selfNullProp);\nclass Foo {}\nclass Bar extends Foo {\n    use Test;\n}\nBar::$selfProp = new Bar;\nBar::$selfNullProp = new Bar;\nBar::$parentProp = new Foo;\nvar_dump(Bar::$selfProp, Bar::$selfNullProp, Bar::$parentProp);\n?>")).toMatchSnapshot();
  });
});

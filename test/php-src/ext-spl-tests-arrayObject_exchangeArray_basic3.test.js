// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_exchangeArray_basic3.phpt
  it("SPL: ArrayObject::exchangeArray() basic usage with object as underlying data store.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $pub1 = 'public1';\n}\necho \"--> exchangeArray() with objects:\\n\";\n$original = new C;\n$ao = new ArrayObject($original);\n$swapIn = new C;\ntry {\n    $copy = $ao->exchangeArray($swapIn);\n    $copy['addedToCopy'] = 'added To Copy';\n} catch (Exception $e) {\n    echo \"Exception:\" . $e->getMessage() . \"\\n\";\n}\n$swapIn->addedToSwapIn = 'added To Swap-In';\n$original->addedToOriginal = 'added To Original';\nvar_dump($ao, $original, $swapIn, $copy);\necho \"\\n\\n--> exchangeArray() with no arg:\\n\";\nunset($original, $ao, $swapIn, $copy);\n$original = new C;\n$ao = new ArrayObject($original);\ntry {\n    $copy = $ao->exchangeArray();\n    $copy['addedToCopy'] = 'added To Copy';\n} catch (TypeError $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n$original->addedToOriginal = 'added To Original';\nvar_dump($ao, $original, $copy);\necho \"\\n\\n--> exchangeArray() with bad arg type:\\n\";\nunset($original, $ao, $swapIn, $copy);\n$original = new C;\n$ao = new ArrayObject($original);\ntry {\n    $copy = $ao->exchangeArray(null);\n    $copy['addedToCopy'] = 'added To Copy';\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$original->addedToOriginal = 'added To Original';\nvar_dump($ao, $original, $copy);\n?>")).toMatchSnapshot();
  });
});

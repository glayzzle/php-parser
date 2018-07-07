const parser = require('../main');

describe("Test variables", function() {
  it("array destructuring", function() {
    expect(parser.parseEval("[$id1, $name1] = $data[0];")).toMatchSnapshot();
  });

  it("default variables", function() {
    expect(parser.parseEval(`
      $a = "foo";
      $b = &$c;
      $a->b = true;`
    )).toMatchSnapshot();
  });

  it("Variable chains", function() {
    expect(parser.parseEval("foo::$a[1][2];")).toMatchSnapshot();
  });

  it("Class constants", function() {
    expect(parser.parseEval(`
      static::foo();
      self::foo();
      parent::foo();
      foo::class;
      $this->foo();
      foo::$bar;
      $this->foo::bar["baz"]::qux();`
    )).toMatchSnapshot();
  });

  it("Encaps var offset", function() {
    expect(parser.parseEval(`
      $a = "{$a[1]}";
      $a = "{$a["a"]}";
      $a = "{$a[$b]}";`
    )).toMatchSnapshot();
  });

  it("Dynamic variables", function() {
    expect(parser.parseEval(`
      $$a = "bar";
      $$$a = "bar";
      \${$a."bar"} = "bar";
      $foo{$a."bar"} = "bar";
    `)).toMatchSnapshot();
  });

  describe("Check errors", function() {
    it("should be ?", function() {
      expect(parser.parseEval("$? = true;", {
        parser: {
          suppressErrors: true
        }
      })).toMatchSnapshot();
    });

    it("should fail on double static lookup", function() {
      expect(parser.parseEval(["this->foo::bar::baz;"].join("\n"), {
        parser: {
          suppressErrors: true
        }
      })).toMatchSnapshot();
    });

    it("should fail on property lookup on static lookup", function() {
      expect(parser.parseEval(["$this->foo::bar->baz;"].join("\n"), {
        parser: {
          suppressErrors: true
        }
      })).toMatchSnapshot();
    });

    it("should fail $foo->bar::!", function() {
      expect(parser.parseEval("$foo->bar::!", {
        parser: {
          suppressErrors: true
        }
      })).toMatchSnapshot();
    });

    it("should fail foo::bar::baz", function() {
      expect(parser.parseEval("foo::bar::baz", {
        parser: {
          suppressErrors: true
        }
      })).toMatchSnapshot();
    });
  });
});

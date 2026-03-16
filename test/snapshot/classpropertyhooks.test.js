const parser = require("../main");
//
describe("classpropertyhooks", () => {
  const test_parser = parser.create({
    parser: {
      version: "8.4",
    },
  });

  it("not supported in php < 8.4", () => {
    expect(() => {
      parser.parseEval(
        `class BookViewModel {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }`,
        {
          parser: {
            version: "8.3",
          },
        },
      );
    }).toThrowErrorMatchingSnapshot();
  });

  describe("getter", () => {
    it("arrow function", () => {
      expect(
        test_parser.parseEval(
          `class BookViewModel {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }`,
        ),
      ).toMatchSnapshot();
    });

    it("block", () => {
      expect(
        test_parser.parseEval(
          `class BookViewModel {
          public string $credits {
            get {
              'mailto:' . $this->email;
            }
          }
        }`,
        ),
      ).toMatchSnapshot();
    });
  });

  describe("setter", () => {
    describe("expression form", () => {
      it("with implicit $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public string $credits {
            set => $this->credits = $value;
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit untyped $value", () => {
        expect(
          test_parser.parseEval(
            `class Person {
            public $name {
              set($new_name) => $this->name = strtolower($new_name);
            }
          }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit typed $value", () => {
        expect(
          test_parser.parseEval(
            `class Person {
            public string $name {
              set(string $new_name) => $this->name = strtolower($new_name);
            }
          }`,
          ),
        ).toMatchSnapshot();
      });
    });

    describe("block form", () => {
      it("with implicit $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public string $credits {
            set {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit untyped $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public $credits {
            set ($value) {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit typed $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public int $credits {
            set (int $value) {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });
    });
  });

  it("support default value", () => {
    expect(
      test_parser.parseEval(
        `class Example {
    public string $foo = 'default value' {
        get => $this->foo ;
    }
}`,
      ),
    ).toMatchSnapshot();
  });

  [
    `class Example {
    private bool $modified = false;
    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');
        set(string $value) {
            $this->foo = strtolower($value);
            $this->modified = true;
        }
    }
}`,
    `class Example
{
    private bool $modified = false;

    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');

        set {
            $this->foo = strtolower($value);
            $this->modified = true;
        }
    }
}`,
    `class Example
{
    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');
        set => strtolower($value);
    }
}`,
    `class Example
{
    public string $foo = 'default value' {
        get {
            return $this->foo;
        }
        set => strtolower($value);
    }
}`,
    `class Example
{
    public string $foo = 'default value' {
        get {
            return $this->foo;
        }
        set {
            $this->foo = strtolower($value);
        }
    }
}`,
  ].forEach((code) => {
    it("support setter + getter", () => {
      expect(test_parser.parseEval(code)).toMatchSnapshot();
    });
  });

  it("can be access by reference", () => {
    expect(
      test_parser.parseEval(`class Foo
{
    private string $_baz;

    public string $baz {
        &get => $this->_baz;
        set {
            $this->_baz = strtoupper($value);
        }
    }
}`),
    ).toMatchSnapshot();
  });

  describe("final", () => {
    it("on the hook itself", () => {
      expect(
        test_parser.parseEval(`class StandardUser
{
    public string $email {
        final set {
           if (! filter_var($value, FILTER_VALIDATE_EMAIL, FILTER_FLAG_EMAIL_UNICODE)) {
               throw new InvalidArgumentException('Invalid email');
           }
           $this->email = $value;
        }
    }
}`),
      ).toMatchSnapshot();
    });

    it("on the property", () => {
      const code = `class User {
    // Child classes may not add hooks of any kind to this property.
    public final string $name;
 
    // Child classes may not add any hooks or override set,
    // but this set will still apply.
    public final string $username {
        set => strtolower($value);
    }
}`;
      expect(test_parser.parseEval(code)).toMatchSnapshot();
    });
  });

  describe("abstract", () => {
    [
      ["get", `abstract class User { abstract public string $email { get; } }`],
      ["set", `abstract class User { abstract public string $email { set; } }`],
      [
        "get + set",
        `abstract class User { abstract public string $email { get; set; } }`,
      ],
    ].forEach(([name, code]) => {
      // eslint-disable-next-line jest/valid-title
      it(name, () => {
        expect(test_parser.parseEval(code)).toMatchSnapshot();
      });
    });
  });

  describe("constructor promotion with hooks", () => {
    it("arrow set", () => {
      expect(
        test_parser.parseEval(
          `class Foo {
  public function __construct(
    public string $name { set => strtolower($value); }
  ) {}
}`,
        ),
      ).toMatchSnapshot();
    });

    it("block set", () => {
      expect(
        test_parser.parseEval(
          `class Foo {
  public function __construct(
    public string $name {
      set { $this->name = strtolower($value); }
    }
  ) {}
}`,
        ),
      ).toMatchSnapshot();
    });

    it("with default value", () => {
      expect(
        test_parser.parseEval(
          `class Foo {
  public function __construct(
    public string $name = 'default' { set => strtolower($value); }
  ) {}
}`,
        ),
      ).toMatchSnapshot();
    });
  });

  describe("attributes on hooks", () => {
    it("attribute on get hook", () => {
      expect(
        test_parser.parseEval(
          `class Foo {
  public string $x {
    #[SomeAttr]
    get => 1;
  }
}`,
        ),
      ).toMatchSnapshot();
    });

    it("attribute on set hook with parameter attribute", () => {
      expect(
        test_parser.parseEval(
          `class Foo {
  public int $x {
    #[SetHook]
    set(#[SensitiveParameter] int $value) {
      $this->x = $value;
    }
  }
}`,
        ),
      ).toMatchSnapshot();
    });
  });

  describe("graceful mode", () => {
    const graceful_parser = parser.create({
      parser: {
        version: "8.4",
        suppressErrors: true,
      },
    });

    it("invalid hook name", () => {
      expect(
        graceful_parser.parseEval(
          `class Foo { public string $bar { delete => 1; } }`,
        ),
      ).toMatchSnapshot();
    });

    it("missing closing brace", () => {
      expect(
        graceful_parser.parseEval(
          `class Foo { public string $bar { get => 1; }`,
        ),
      ).toMatchSnapshot();
    });

    it("missing hook body", () => {
      expect(
        graceful_parser.parseEval(`class Foo { public string $bar { get } }`),
      ).toMatchSnapshot();
    });
  });
});

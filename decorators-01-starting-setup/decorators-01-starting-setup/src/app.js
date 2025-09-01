var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function Logger(stringLog) {
    return function (constructor) {
        console.log(stringLog);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                var elHook = document.querySelector("#".concat(hookId));
                if (elHook) {
                    elHook.innerHTML = template;
                    elHook.querySelector('h1').textContent = _this.name;
                }
                return _this;
            }
            return class_1;
        }(originalConstructor));
    };
}
// @Logger('Person-Class')
var Person = function () {
    var _classDecorators = [Logger('Login'), WithTemplate('<h1> Person Object </h1>', 'app')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Person = _classThis = /** @class */ (function () {
        function Person_1() {
            this.name = 'Kerlon';
            console.log('Hi' + this.name);
        }
        return Person_1;
    }());
    __setFunctionName(_classThis, "Person");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
}();
var person = new Person();
function log(target, propertyName) {
    console.log('Property Decorator!');
    console.log(target, propertyName);
}
function log2(target, name, description) {
    console.log('Property Decorator!');
    console.log(target);
    console.log(name);
    console.log(description);
}
function log3(target, name, description) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(description);
}
var product = function () {
    var _a;
    var _staticExtraInitializers = [];
    var _instanceExtraInitializers = [];
    var _static_hello_decorators;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _set_price_decorators;
    return _a = /** @class */ (function () {
            function product(p, title) {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this._price = __runInitializers(this, _title_extraInitializers);
                this.title = title;
                this._price = p;
            }
            Object.defineProperty(product.prototype, "price", {
                get: function () {
                    return this._price;
                },
                set: function (val) {
                    this._price = val;
                },
                enumerable: false,
                configurable: true
            });
            product.hello = function () {
                console.log('Hello!');
            };
            return product;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [log];
            _set_price_decorators = [log2];
            _static_hello_decorators = [log3];
            __esDecorate(_a, null, _static_hello_decorators, { kind: "method", name: "hello", static: true, private: false, access: { has: function (obj) { return "hello" in obj; }, get: function (obj) { return obj.hello; } }, metadata: _metadata }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _set_price_decorators, { kind: "setter", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_a, _staticExtraInitializers);
        })(),
        _a;
}();
function autobind(_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDecriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDecriptor;
}
var Printer = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _showMessage_decorators;
    return _a = /** @class */ (function () {
            function Printer() {
                this.message = (__runInitializers(this, _instanceExtraInitializers), 'This Workds');
            }
            Printer.prototype.showMessage = function () {
                console.log(this.message);
            };
            return Printer;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _showMessage_decorators = [autobind];
            __esDecorate(_a, null, _showMessage_decorators, { kind: "method", name: "showMessage", static: false, private: false, access: { has: function (obj) { return "showMessage" in obj; }, get: function (obj) { return obj.showMessage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var p = new Printer();
var button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
var Course = /** @class */ (function () {
    function Course(t, p) {
        this.title = t;
        this.price = p;
    }
    return Course;
}());
var courseForm = document.querySelector('form');
courseForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var titleEl = document.querySelector('#title');
    var priceEl = document.querySelector('#price');
    var title = titleEl.value;
    var price = +priceEl.value;
    var newCourse = new Course(title, price);
    console.log(newCourse);
});

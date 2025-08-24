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
var User = /** @class */ (function () {
    function User(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._hobbies = [];
    }
    ;
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this._firstName + '' + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "Hobbies", {
        set: function (hobbie) {
            this._hobbies.push(hobbie);
        },
        enumerable: false,
        configurable: true
    });
    ;
    User.greet = function () {
        console.log('Hello!');
    };
    ;
    User.eid = 'User';
    return User;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(jobTitle, firstName, lastname) {
        var _this = _super.call(this, firstName, lastname) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Developer.prototype.work = function () {
        console.log(this._firstName);
    };
    return Developer;
}(User));
var kerlon = new User('Kerlon', 'Aragão');
kerlon.Hobbies = 'Play Games';
console.log(kerlon.fullName);
var AccountTransfer = /** @class */ (function () {
    function AccountTransfer(identifier) {
        this.identifier = identifier;
    }
    return AccountTransfer;
}());
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(identifier, cpf) {
        var _this = _super.call(this, identifier) || this;
        _this.identifier = identifier;
        _this.cpf = cpf;
        return _this;
    }
    ;
    ///...
    Account.prototype.saque = function (value) {
        ///....
    };
    Account.prototype.deposito = function (value) {
        ///....
    };
    return Account;
}(AccountTransfer));
;

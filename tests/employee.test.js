const Employee = require("../lib/employee");

describe("Employee class", () => {
    it("Making a new instance of the class should return an object", () => {
        const obj = new Employee("", "2", "");

        expect(typeof(obj)).toBe("object");
    });
    it("name property should be assigned to the obj when passed through the constructor", () => {
        const name = "django";
        const obj = new Employee(name, "2");

        expect(obj.name).toBe(name);
    });
    it("id property should be assigned to the obj when passed through the constructor", () => {
        const id = "12903";
        const obj = new Employee("noname", id);

        expect(obj.id).toBe(id);
    });
    it("email property should be assigned to the obj when passed through the constructor", () => {
        const email = "aol";
        const obj = new Employee("noname", "1", email);

        expect(obj.email).toBe(email);
    });
    it("method getName() should return the name", () => {
        const name = "django";
        const obj = new Employee(name, "2");

        expect(obj.getName()).toBe(name);
    });
    it("method getId() should return the ID", () => {
        const id = "id";
        const obj = new Employee("noname", id);

        expect(obj.getId()).toBe(id);
    });
    it("method getEmail() should return the email", () => {
        const email = "aol";
        const obj = new Employee("noname", "1", email);

        expect(obj.getEmail()).toBe(email);
    });
    it("method getRole() should return the string 'Employee'", () => {
        const obj = new Employee("", "2", "");

        expect(obj.getRole()).toBe("Employee");
    });
});
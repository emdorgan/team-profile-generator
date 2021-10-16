const Employee = require("../lib/employee");

describe("Employee", () => {
    it("Should return an employee object", () => {
        const obj = new Employee();

        expect(typeof(obj)).toBe("object");
    })
    it("name property should be assigned to the obj when passed through the constructor", () => {
        const name = "django";
        const obj = new Employee(name);

        expect(obj.name).toBe(name);
    })
    it("get ID should return the employee ID", () => {
        const id = "12903";
        const obj = new Employee("noname", id);

        expect(obj.id).toBe(id);
    })
})

const Manager = require("../lib/manager");

describe("Manager class", () => {
    it("Making a new instance of the class should return an object", () => {
        const obj = new Manager("", "2", "");

        expect(typeof(obj)).toBe("object");
    });
    it("Manager object should properly inherit ALL employee object proprerites and methods", () => {
        const name = "django";
        const id = "12";
        const email = "email";
        const obj = new Manager(name, id, email);
        
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.getName()).toBe(name);
        expect(obj.getId()).toBe(id);
        expect(obj.getEmail()).toBe(email);
    });
    it("Should get an office number if passed as the 4th argument and getOfficeManager should return it", () => {
        const officeNum = "123"
        const obj = new Manager("", "2", "", officeNum);

        expect(obj.officeNumber).toBe(officeNum);
        expect(obj.getOfficeNumber()).toBe(officeNum);
    });
    it("Role should overwrite and be Manager", () => {
        const obj = new Manager();
        
        expect(obj.getRole()).toBe("Manager");
    });
});
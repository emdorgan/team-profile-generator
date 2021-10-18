const Intern = require("../lib/intern");

describe("Intern class", () => {
    it("Making a new instance of the class should return an object", () => {
        const obj = new Intern("", "2", "");

        expect(typeof(obj)).toBe("object");
    });
    it("Intern object should properly inherit ALL employee object proprerites and methods", () => {
        const name = "django";
        const id = "12";
        const email = "email";
        const obj = new Intern(name, id, email);
        
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.getName()).toBe(name);
        expect(obj.getId()).toBe(id);
        expect(obj.getEmail()).toBe(email);
    });
    it("Should get an school if passed as the 4th argument and getSchool should return it", () => {
        const school = "rpi"
        const obj = new Intern("", "2", "", school);

        expect(obj.school).toBe(school);
        expect(obj.getSchool()).toBe(school);
    });
    it("Role should overwrite and be Intern", () => {
        const obj = new Intern();
        
        expect(obj.getRole()).toBe("Intern");
    });
});
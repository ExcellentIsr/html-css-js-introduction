import employeesConfig from '/src/config/employee-config.json' assert{type: 'json'}
export default class EmployeeForm {
    #dataObj;
    #formElement;
    constructor(parentId) {
        const parentElement = document.getElementById(parentId);
        this.#dataObj = {}
        this.#fillForm(parentElement, parentId);
        this.#setElements(parentId);
    }
    #fillForm(parentElement, parentId) {
        const { minSalary, maxSalary, minYear, maxYear } = employeesConfig;
        parentElement.innerHTML =
            `<form class="form-control" id="${parentId}-form-id">
                <div class="text-field">
                    <label class="text-field__label" for="name">Name</label>
                    <input class="text-field__input" type="text" name="name" id="name" placeholder="Enter his name">
                </div>
                <div class="radio-group">
                    <div class="radio-control">
                        <label class="text-field__label" for="female-id">Female</label>
                        <input class="text-field__input" id="female-id" type="radio" name="gender" required value="Female" unchecked>
                    </div>
                    <div class="radio-control">
                        <label class="text-field__label" for="male-id">Male</label>
                        <input class="text-field__input" id="male-id" type="radio" name="gender" required value="Male" unchecked>
                    </div>
                </div>
                <div class="text-field">
                    <label class="text-field__label" for="salary">Salary</label>
                    <input class="text-field__input" type="number" name="salary" id="salary" min="${minSalary}" max="${maxSalary}" placeholder="Enter salary">
                </div>
                <div class="text-field">
                    <label class="text-field__label" for="birthYear">Year of birth</label>
                    <input class="text-field__input" type="number" name="birthYear" id="birthYear" min="${minYear}" max="${maxYear}" placeholder="Enter year of birth">
                </div>
                <div class="text-field">
                    <label class="text-field__label" for="department">Department</label>
                    <input class="text-field__input" type="text" name="department" id="department" placeholder="Enter his department">
                </div>
                <button type="submit" class="menu-button menu-button1">Submit</button>    
            </form>`
    }
    #setElements(parentId){
        this.#formElement = document.getElementById(`${parentId}-form-id`);
    }
    addHandler(submitFn) {
        this.#formElement.onsubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(this.#formElement);
            this.#dataObj.name = formData.get('name');
            this.#dataObj.gender = formData.get('gender');
            this.#dataObj.salary = formData.get('salary');
            this.#dataObj.birthYear = formData.get('birthYear');
            this.#dataObj.department = formData.get('department');
            await submitFn(this.#dataObj);
        }
    }
}
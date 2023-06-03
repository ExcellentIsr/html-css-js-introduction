import CompanyService from './service/CompanyService.js';
import ApplicationBar from './ui/ApplicationBar.js';
import DataGrid from './ui/DataGrid.js';
import EmployeeForm from './ui/EmployeeForm.js';
import { getRandomEmployee } from './util/random.js';
import statisticsConfig from './config/statistic-config.json' assert{type: 'json'}
import employeesConfig from './config/employee-config.json' assert{type: 'json'}
import { range } from './util/number-functions.js';
import Spinner from './UI/spinner.js';
const N_EMPLOYEES = 10;
//employee model
//{id: number of 9 digits, name: string, birthYear: number,
// gender: female | male, salary: number, department: QA, Development, Audit, Accounting, Management}

const sections = [
    { title: 'Empolyees', id: 'employees-table-place' },
    { title: 'Add Employee', id: 'employees-form-place' },
    { title: 'Statistics', id: 'statistics-place' }
];
const { minSalary, maxSalary, minYear, maxYear } = employeesConfig;
const { age, salary } = statisticsConfig;
const employeeColumns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'birthYear', headerName: 'Birth Year' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'salary', headerName: 'Salary (ILS)' },
    { field: 'department', headerName: 'Department' }
];
const statisticsColumns = [
    { field: 'min', headerName: 'Min' },
    { field: 'max', headerName: 'Max' },
    { field: 'count', headerName: 'Count' },
];
const menu = new ApplicationBar('menu-place', sections, menuHandler);
const companyService = new CompanyService();
const employeeForm = new EmployeeForm('employees-form-place');
const employeeTable = new DataGrid('employees-table-place', employeeColumns);
const ageStatistics = new DataGrid('age-statistics-place', statisticsColumns);
const salaryStatistics = new DataGrid('salary-statistics-place', statisticsColumns);
const spinner = new Spinner('spinner-place');
employeeForm.addHandler(async (employee) => {
    await action(companyService.addEmployee.bind(companyService, employee));
});
async function menuHandler(index) {
    switch (index) {
        case 0: {
            const employees = await action(companyService.getAllEmployees.bind(companyService));
            employeeTable.fillData(employees);
            break;
        }
        case 2: {
            const ageStatisticsData = await action(companyService.getStatistics.bind(companyService, age.field, age.interval));
            ageStatistics.fillData(ageStatisticsData);
            const salaryStatisticsData = await action(companyService.getStatistics.bind(companyService, salary.field, salary.interval));
            salaryStatistics.fillData(salaryStatisticsData);
            break;
        }
    }
}
async function action(serviceFn) {
    spinner.start();
    const res = await serviceFn();
    spinner.stop();
    return res;
}
function createRandomEmployees() {
    const promises = range(0, N_EMPLOYEES).map(() =>
        companyService.addEmployee(getRandomEmployee(minSalary, maxSalary, minYear, maxYear)));
    return Promise.all(promises);
}
action(createRandomEmployees);
﻿namespace ConsoleApp3
{//ecapsulation means keep all code in a class (which is realted to that details)
    public class Employee
    {
        public int EmployeeId;
        public string Name;
        double salary;
        bool isEmployeed;
        char gender;
        DateTime dob;
        public void  AcceptEmployeeDetails()
        {
            Console.WriteLine("welcome to csharp world");
            Console.WriteLine("Enter Employee Details");
            Console.WriteLine("======================================");
            Console.WriteLine("ENTER EMPLOYEE ID---");
            int EmployeedId = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("------ENTER EMPLOYEE Name---");
            string EmployeeName = Console.ReadLine();
            Console.WriteLine("------ENTER EMPLOYEE SALARY---");
            double salary = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("------IS Employeed Or Not?---");
            bool isEmployeed = Convert.ToBoolean(Console.ReadLine());
            Console.WriteLine("Enter the Gender of Employee use only M or F");
            char gender = Convert.ToChar(Console.ReadLine());
            Console.WriteLine("------ENTER EMPLOYEE Date Of Birth -eneter in yy-mm-dd-format");
            DateTime dob = Convert.ToDateTime(Console.ReadLine());
            Console.WriteLine("Employee---- Detials-----");
        }
 
        public void DisplayEmployeeDetails()
        {
            Console.WriteLine("EmployeeId:{0}\t Name:{1}\t salary:{2}\t isEmployeed{3}\tgender:\t{4}\tDateOfBirth\t{5}", EmployeeId, Name, salary, isEmployeed, gender, dob);
        }
 
    }
    internal class Program
    {
        static void Main(string[] args)//starting point for program
        {
 
            //classname objectname=new classname()
            Employee objEmployee = new Employee();
            //objectname.metodname()
 
            objEmployee.AcceptEmployeeDetails();
            objEmployee.DisplayEmployeeDetails();
 
 
            Console.Read();
 
 
 
 
 
 
        }
    }
}
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ACM.BL
{
    public class Customer
    {
        // Parameters
        public int CustomerId { get; private set; }

        public string EmailAddress { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
         
        public string FullName
        {
            get
            {
                string fullName = "";


                if (!string.IsNullOrWhiteSpace(LastName) && !string.IsNullOrWhiteSpace(FirstName))
                {
                    fullName = LastName + ", " + FirstName;
                }
                else
                {
                    fullName = !string.IsNullOrWhiteSpace(LastName) ? LastName : FirstName;
                }

                return fullName;
            }
        }
    
        public static int InstanceCount { get; set; }

        // Constructors
        public Customer()
        {

        }

        public Customer(int customerId)
        {
            CustomerId = customerId;
        }

        public bool Validate()
        {
            var isValid = true;

            if (string.IsNullOrWhiteSpace(LastName)) isValid = false;
            if (string.IsNullOrWhiteSpace(EmailAddress)) isValid = false;

            return isValid;
        }

        public Customer Retrieve(int customerId)
        {
            // code here...

            return new Customer();
        }

        public List<Customer> Retrieve()
        {
            // code here...

            return new List<Customer>();
        }

        public bool Save()
        {
            // code here...

            return true;
        }
    }
}

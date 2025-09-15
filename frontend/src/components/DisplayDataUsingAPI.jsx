import React, { useEffect, useState } from "react";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Get the company name from each user
        const companyNames = data.users.map((user) => user.company.name);
        // Remove duplicates if needed
        const uniqueCompanyNames = [...new Set(companyNames)];
        setCompanies(uniqueCompanyNames);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Company Names</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {companies.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompanyList;

import React, { useState } from "react"; // Import React and useState hook
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "Full Name",
  "Username",
  "Gender",
  "Contact Number",
  "D.O.R",
  "Address",
  "Amount",
  "Chosen Service",
  "Plan",
  "Action",
];

const initialTABLE_ROWS = [
  {
    fullName: "John Doe",
    username: "johndoe123",
    gender: "Male",
    contactNumber: "+1234567890",
    dateOfRegistration: "2024-01-15",
    address: "123 Main St, Anytown, USA",
    amount: "$2,500",
    chosenService: "Service A",
    plan: "Premium",
  },
  {
    fullName: "Jane Smith",
    username: "janesmith456",
    gender: "Female",
    contactNumber: "+0987654321",
    dateOfRegistration: "2024-02-20",
    address: "456 Elm St, Othertown, USA",
    amount: "$5,000",
    chosenService: "Service B",
    plan: "Standard",
  },
  {
    fullName: "Sam Johnson",
    username: "samjohnson789",
    gender: "Male",
    contactNumber: "+1122334455",
    dateOfRegistration: "2024-03-10",
    address: "789 Maple St, Sometown, USA",
    amount: "$3,400",
    chosenService: "Service C",
    plan: "Basic",
  },
];

export function MemberManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableRows, setTableRows] = useState(initialTABLE_ROWS);

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter rows based on search term
  const filteredRows = tableRows.filter((row) => {
    return (
      row.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.contactNumber.includes(searchTerm) ||
      row.dateOfRegistration.includes(searchTerm) ||
      row.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.amount.includes(searchTerm) ||
      row.chosenService.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.plan.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Function to handle remove button click
  const handleRemoveClick = (username) => {
    setTableRows((prevRows) =>
      prevRows.filter((row) => row.username !== username)
    );
    alert(`Removed user: ${username}`);
  };

  // Function to handle edit button click
  const handleEditClick = (username) => {
    // Logic to handle edit action (e.g., open a modal, navigate to edit page, etc.)
    console.log("clicked");

    alert(`Edit user: ${username}`);
  };

  return (
    <Card className="h-full w-full p-6">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Registrations
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Details about the most recent registrations
            </Typography>
          </div>
          <div className="flex items-center w-full shrink-0 gap-2 md:w-max md:ml-auto">
            <div className="w-full md:w-72">
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <Button
              className="flex items-center text-stone-700 gap-3"
              size="sm"
            >
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.length > 0 ? (
              filteredRows.map(
                (
                  {
                    fullName,
                    username,
                    gender,
                    contactNumber,
                    dateOfRegistration,
                    address,
                    amount,
                    chosenService,
                    plan,
                  },
                  index
                ) => {
                  const isLast = index === filteredRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={username}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {fullName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {username}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {gender}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {contactNumber}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {dateOfRegistration}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {address}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {chosenService}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {plan}
                        </Typography>
                      </td>
                      <td className="p-4 space-x-4">
                       
                        <div className="flex flex-col font-semibold">
                          <button className="text-red-600" onClick={() => handleRemoveClick(username)}>
                            Remove
                          </button>
                          <button className="" onClick={() => handleEditClick(username)}>
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr>
                <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                  <Typography variant="small" color="blue-gray">
                    No results found
                  </Typography>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

import { useEffect, useState } from "react";
import axios from "axios"; // You can also use the native fetch if you prefer

export default function Reminder() {
  const [reminder, setReminder] = useState(null); // State to hold the reminder status
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const userId = "672cec3c41b32cfad25fbeb6"

  useEffect(() => {
    // Function to fetch the reminder status
    const fetchReminder = async () => {
      try {
        const response = await axios.get(`http://localhost:7002/api/member/users/${userId}`); 
        setReminder(response.data.reminder);
        console.log(response.data.reminder)
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reminder data.");
        setLoading(false);
      }
    };

    fetchReminder();
  }, []);

  // Conditional rendering based on loading, error, or reminder status
  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full p-6 mx-auto mt-4">
      {reminder === true ? (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
          <h4 className="font-semibold text-lg">ALERT</h4>
          <p>
            This is to notify you that your current membership program is going
            to expire soon. Please clear up your payments before your due dates.
            <br />
            IT IS IMPORTANT THAT YOU CLEAR YOUR DUES ON TIME IN ORDER TO AVOID
            SERVICE DISRUPTIONS.
          </p>
          <hr className="my-2 border-t-2 border-red-300" />
          <p className="text-sm">
            We value you as our customer and look forward to continuing to serve
            you in the future.
          </p>
        </div>
      ) : (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
          <h4 className="font-semibold text-lg">NO REMINDERS YET!</h4>
        </div>
      )}
    </div>
  );
}

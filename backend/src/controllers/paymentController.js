import Payment from '../model/Payment.js';
import Member from '../model/Member.js';

// Create a new payment
export const createPayment = async (req, res) => {
    const { memberId, amountPaid, paymentDate } = req.body;

    try {
        // Find the member to make sure the member exists
        const member = await Member.findById(memberId);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }

        // Create the payment
        const payment = new Payment({
            member: memberId,
            amountPaid,
            paymentDate,
            chosenService: member.chosenService,
            plan: member.plan,
        });

        // Save the payment
        await payment.save();

        // Send reminder if the member has reminder enabled
        if (member.reminder) {
            sendReminder(member); // You can implement this to send actual reminders via email/SMS
        }

        res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get payments for a specific member
export const getPaymentsForMember = async (req, res) => {
    const { memberId } = req.params;

    try {
        // Find payments related to the member
        const payments = await Payment.find({ member: memberId }).populate('member', 'fullName username');

        if (!payments || payments.length === 0) {
            return res.status(404).json({ message: 'No payments found for this member' });
        }

        res.status(200).json({ payments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all payment details of the members
export const getAllPayment = async (req, res) => {
    try {
      // Find all payments and populate the 'member' field with the 'fullName' field from the Member model
      const payments = await Payment.find()
        .populate('member', 'fullName')  // Populating member with only the 'fullName'
        .exec();  // Use .exec() to execute the query
  
      if (!payments || payments.length === 0) {
        return res.status(404).json({ message: 'No payments found' });
      }
  
      // Respond with all payments including the member's fullName
      res.status(200).json({ payments });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Send reminder (e.g., email or SMS) to a member
export const sendReminder = (member) => {
    // Placeholder for sending reminders (email, SMS, etc.)
    console.log(`Sending payment reminder to ${member.fullName} (${member.username})`);

    // You can use an email service like SendGrid, or SMS service like Twilio to send the actual reminder.
    // Implement the actual reminder functionality here.
};


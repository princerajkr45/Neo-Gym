import Equipment from "../model/Equipment.js";

// Create new equipment
export const createEquipment = async (req, res) => {
  try {
    const { name, description, qty, amount, vendor, address, contact, purchasedDate } = req.body;

    // Create a new equipment document
    const newEquipment = new Equipment({
      name,
      description,
      qty,
      amount,
      vendor,
      address,
      contact,
      purchasedDate,
    });

    // Save the new equipment to the database
    await newEquipment.save();
    res.status(201).json({ message: "Equipment created successfully", data: newEquipment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create equipment", error });
  }
};

// Get all equipment
export const getAllEquipment = async (req, res) => {
  try {
    const equipmentList = await Equipment.find();
    res.status(200).json({ data: equipmentList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch equipment", error });
  }
};


// Update equipment by ID
export const updateEquipment = async (req, res) => {
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json({ message: "Equipment updated successfully", data: updatedEquipment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update equipment", error });
  }
};

// Delete equipment by ID
export const deleteEquipment = async (req, res) => {
  try {
    const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);

    if (!deletedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete equipment", error });
  }
};

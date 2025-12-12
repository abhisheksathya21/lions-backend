import Event from "../models/Event.js";

// @desc Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events" });
  }
};

// @desc Create event
export const createEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;

    const event = await Event.create({
      title,
      date,
      description,
      image: req.file?.path || null
    });

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};


// @desc Delete event
export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event" });
  }
};
export const updateEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;

    const updatedData = { title, date, description };

    if (req.file) updatedData.image = req.file.path;

    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};
// @desc Get single event by ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error });
  }
};

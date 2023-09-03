const Users = require("../models/userModel");

const searchNearby = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Define a maximum distance in kilometers within which to search for nearby users
    const maxDistanceKm = 30; // Change this to your desired radius in kilometers

    // Convert kilometers to meters
    const maxDistanceMeters = maxDistanceKm * 1000;

    // Use the $geoNear aggregation to find nearby users
    const nearbyUsers = await Users.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: user.location.coordinates,
          },
          distanceField: "distance",
          maxDistance: maxDistanceMeters,
          spherical: true,
        },
      },
      {
        $match: {
          _id: { $ne: userId }, // Exclude the current user
          accountType: { $ne: user.accountType }, // Filter by account type
        },
      },
    ]);

    res.json({ message: "Nearby users", users: nearbyUsers });
  } catch (error) {
    return next({
      log: "Express error handler caught getUsers middleware error",
      status: 500,
      message: { err: error },
    });
  }
};

module.exports = {
  searchNearby,
};

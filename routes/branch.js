const express = require("express");
const router = express.Router();
const branchModel = require("../models/branch");

router.post("/Save_Branch", async (req, res) => {
  try {
    const result = await branchModel.Save_Branch(req.body);
    res.status(200).json({
      success: true,
      message: "Branch saved successfully",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error saving branch", error });
  }
});

router.get("/Get_All_Branch", async (req, res) => {
  try {
    const result = await branchModel.Get_All_Branch();
    res.status(200).json({
      success: true,
      message: "Branches fetched successfully",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching branches", error });
  }
});

router.post("/delete_branch", async (req, res) => {
  try {
    const { branch_id} = req.body;
    const result = await branchModel.Delete_Branch(branch_id);
    res.status(200).json({
      success: true,
      message: "Branch deleted successfully",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting branch", error });
  }
});

module.exports = router;

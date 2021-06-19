const Bootcamp = require('../models/Bootcamp');

/**
 * @description get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access poublic
 */
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, text: `showing all the bootcamps` });
};
/**
 * @description get single bootcamp
 * @route GET /api/v1/bootcamps/:id
 * @access poublic
 */
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, text: `showing bootcamp ${req.params.id}` });
};
/**
 * @description create new bootcamp
 * @route POST /api/v1/bootcamps
 * @access private
 */
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
/**
 * @description update bootcamp
 * @route PUT /api/v1/bootcamps/:id
 * @access private
 */
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, text: `update bootcamp ${req.params.id}` });
};
/**
 * @description delete bootcamp
 * @route DELETE /api/v1/bootcamps/:id
 * @access private
 */
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, text: `delete bootcamp ${req.params.id}` });
};

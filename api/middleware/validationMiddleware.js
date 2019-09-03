import joi from 'joi';

const validationMiddleware = (req, res, next) => {
  const { url, body } = req;
  if (url === '/api/v1/meals' && req.route.methods.post) {
    const schema = joi.object().keys({
      meal_name: joi.string().required(),
      user_id: joi.number().integer().required(),
      price: joi.number().integer().required().min(0),
    });
    let message;
    joi.validate(body, schema, async (err, value) => {
      if (err) {
        message = `${err.details[0].path} field is invalid.`;
        res.status(400).json({
          status: 'Vaidation error',
          message,
        });
      } else {
        req.body.mealObj = value;
        next();
      }
    });
  } else if (req.route.methods.delete) {
    const { id } = req.params;
    // eslint-disable-next-line radix
    const val = parseInt(id);
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(val)) {
      next();
    } else {
      const message = 'Parameter (id) should be an integer.';
      res.status(400).json({
        status: 'Vaidation error',
        message,
      });
    }
  }
};

export default validationMiddleware;

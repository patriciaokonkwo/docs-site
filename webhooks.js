const Joi = require('joi');

const webhookSchema = Joi.object({
    id: Joi.string().required(),
    // Add other fields as necessary
});

app.delete('/webhooks/:id', (req, res) => {
    const { error } = webhookSchema.validate(req.params);
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }
    // Proceed with deletion logic
});
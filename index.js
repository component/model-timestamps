
/**
 * Expose `timestamps()`.
 */

module.exports = timestamps;

/**
 * Add timestamps to `model`.
 *
 * @param {Function} model
 * @api public
 */

function timestamps(model) {
  model.attr('created_at', { type: 'date' });
  model.attr('updated_at', { type: 'date' });
  model.on('saving', function(obj){
    if (obj.isNew()) obj.created_at(new Date);
    obj.updated_at(new Date);
  });
}
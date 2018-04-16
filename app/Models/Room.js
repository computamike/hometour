'use strict'

const Model = use('Model')

class Room extends Model {
  /*
  |--------------------------------------------------------------------------
  | Model Config
  |--------------------------------------------------------------------------
  */

  /**
   * Validator rules
   * @type {Object}
   */
  static get rules () {
    return {
      title: 'string|required|unique|max:40',
      blurb: 'string|required',
      linksto: 'string|required|max:150'
    }
  }

  /**
   * messages to be returned to the end user
   * upon validation failure
   * @type {Object}
   */
  static get messages () {
    return {
    }
  }

  /**
   * Sanitisation rules
   * @type {Object}
   */
  static get sanitisationRules () {
    return {
      title: 'strip_tags',
      blurb: 'strip_tags',
      linksto: 'strip_tags'
    }
  }
}

module.exports = Room

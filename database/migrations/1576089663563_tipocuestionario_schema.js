'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipocuestionarioSchema extends Schema {
  up () {
    this.create('tipocuestionarios', (table) => {
      table.increments()
      table.string('nombretipocuestionario', 80).notNullable()
      table.integer('visible').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipocuestionarios')
  }
}

module.exports = TipocuestionarioSchema

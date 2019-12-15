'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuestionariomodSchema extends Schema {
  up () {
    this.create('cuestionariomods', (table) => {
      table.increments()
      table.integer('idtipocuestionario')
      table.string('preguntatxt', 80).notNullable()
      table.string('respuesta', 80)
      table.integer('tiporespuesta')
      table.integer('visible').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cuestionariomods')
  }
}

module.exports = CuestionariomodSchema

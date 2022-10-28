/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issue', () => {  
  it('Successfully', () => {
    const issue = {
      title: `issue-${faker.random.uuid()}`,
      description: faker.random.words(5),
      
      project: {
        name: `project-${faker.random.uuid()}`,
        description: faker.random.words(5)
      }
    }

    cy.api_createIssue(issue)
    .then(response => {
      expect(response.status).to.equal(201)
      expect(response.body.tile).to.equal(issue.name)
      expect(response.body.description).to.equal(issue.description)
    })
  })
})
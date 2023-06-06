describe('Todo List App', () => {
  beforeEach(() => {
    const todos = {
      todoData: {
        filter: 'all',
        list: [
          { id: '1', title: 'Task 1', isCompleted: false },
          { id: '2', title: 'Task 2', isCompleted: true },
          { id: '3', title: 'Task 3', isCompleted: false },
        ],
      },
    };

    localStorage.setItem('todoData', JSON.stringify(todos));

    cy.visit('https://localhost:3000');
  });

  it('adding of new task', () => {
    cy.get('ul').find('li').should('have.length', 3);
    cy.get('input[type=text]').type('new task').type('{enter}');
    cy.get('ul').find('li').should('have.length', 4);
  });

  it('remove item', () => {
    cy.get('ul').find('li').should('have.length', 3);
    cy.get('button i').eq(0).click();
    cy.get('ul').find('li').should('have.length', 2);
  });

  it('filter completed items', () => {
    cy.get('ul').find('li').should('have.length', 3);

    cy.get('button div').eq(2).click();

    cy.get('ul').find('li').should('have.length', 2);
  });

  it('counter', () => {
    cy.contains('div', '2 items left').should('be.visible');
    cy.get('ul').find('li').eq(0).find('label').click();
    cy.contains('div', '1 items left').should('be.visible');
  });
});

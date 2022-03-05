describe('Top Rated Movies API', () => {
    let apiKey = Cypress.env('api_key');

    context('GET Top Rated Movie List', () => {
        it('should return a list of top rated movies', () => {
            cy.request({
                method: 'GET',
                url: '/top_rated',
                qs: {api_key: apiKey}
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                });
        });

        it('send a invalid authentication credentials & get 401 Unauthorized response code', () => {
            cy.request({
                method: 'GET',
                url: '/top_rated',
                qs: {api_key: '22224234244'},
                failOnStatusCode: false
            })
                .should((response) => {
                    expect(response.status).to.eq(401)
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});
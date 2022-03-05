describe('Rate Movies API', () => {
    let apiKey = Cypress.env('api_key');
    const gSessionId = '26d01861771e88fa77508a2acee07567';
    const myRating = 5;

    context('POST Movie Rate', () => {
        it('should post movie rated by user', () => {
            cy.request({
                method: 'POST',
                url: '/19404/rating',
                qs: {
                    api_key: apiKey,
                    guest_session_id: gSessionId
                },
                body: { "value": myRating },
                failOnStatusCode: false
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(201)
                });
        });

        it('should POST a request with invalid Guest Session ID & get 401 response code', () => {
            cy.request({
                method: 'POST',
                url: '/19404/rating',
                qs: {
                    api_key: 'f5baf554391d87da735f470de5a00b2',
                    guest_session_id: gSessionId
                },
                body: { "value": myRating },
                failOnStatusCode: false
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(401)
                });
        });
    });
});
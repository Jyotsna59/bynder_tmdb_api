describe('Top Rated Movies API', () => {
    context('GET /Top Rated Movie List', () => {
        const base_url='https://developers.themoviedb.org/3/movies/rate-movie'
        it('send a valid api key and get 200 response code', () => {
            cy.request({
                method: 'GET',
                end_point: '/movie/top_rated',
                api_key: 'e3c9e03e7e810aba89b7828365892a92'
            })
            .should((response) => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                });
        });
        
        it('send a invalid authentication credentials & get 401 Unauthorized response code', () => {
            cy.request({
                method: 'GET',
                end_point: '/movie/top_rated',
                api_key: 'e3c9e03e7e810aba89b7828365892a92'
            })
                .should((response) => {
                    expect(response.status).to.eq(400)
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});
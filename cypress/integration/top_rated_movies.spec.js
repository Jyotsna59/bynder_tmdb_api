describe('Top Rated Movies API', () => {
    context('GET /Top Rated Movie List', () => {
        it('should return a list of top rated movies', () => {
            cy.request({
                method: 'GET',
                // url: 'https://api.themoviedb.org/3/movie/550',
                url: 'https://developers.themoviedb.org/3/movies/get-top-rated-movies',
                qs: {
                  api_key: 'e3c9e03e7e810aba89b7828365892a92'
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                });
        });
        
        it('send a invalid authentication credentials & get 401 Unauthorized response code', () => {
            cy.request({
                method: 'GET',
                // url: 'https://api.themoviedb.org/3/movie/550',
                url: 'https://developers.themoviedb.org/3/movies/get-top-rated-movies',
                qs: {
                  api_key: 'e3c9e03e7e810aba89b7828365892a'
                }
            })
                .should((response) => {
                    expect(response.status).to.eq(400)
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});
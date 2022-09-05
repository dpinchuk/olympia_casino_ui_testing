
cy.request({
    url: 'https://tempmail.dev/Email/',
    method: 'POST',
}).then(response => {
    return new Promise(resolve => {
        expect(response).property('status').to.equal(200);
        expect(response.body).property('Email').to.not.be.oneOf([null, ""]);
        const respBody = response.body;
        const email = respBody['Email']
        resolve(email);
    })
})

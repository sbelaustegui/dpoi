/**
 * HTTP Web Service
 * This is a sample service class that uses fetch and promises.
 *
 *
 * @class HTTPService
 */
class HTTPService {

    constructor() { }

    /**
     * Get Fetch using HTTP Bin
     *
     * @example
     var service = new sampleWebService();
     service.Get().then((success => {
        console.log(success);
      }))
     * @memberof sampleWebService
     * @returns {promise} returns a Promise
     */
    getRequest() {
        return new Promise((resolve, reject) => {
            // We fetch the API endpoint
            fetch('http://dpoi2012api.appspot.com/api/1.0/').then((response) => {
                if (response.status !== 200) {
                    // Not success
                    resolve(response.text());
                } else {
                    // success
                    resolve(response.text());
                }
            }).catch(err => {
                // Service Error
                reject(err);
            });
        });
    }

    /**
     * Sample Post Fetch using HTTP Bin
     * @example
     var service = new sampleWebService();
     service.Post({
          custname: 'John Doe',
          custemail: 'test@test.com'
        }).then(success => {
          console.log(success);
        })
     * @param {Object} object This is the form data.
     * @memberof sampleWebService
     * @returns {Promise} return a promise
     */
    postRequest(object) {
        return new Promise((resolve, reject) => {
            // We create a new form
            var formData = new FormData();

            // we add all object items to the new form
            object.forEach(() => (value, key) => {
                formData.append(key, value);
            });

            // We fetch Post the API
            fetch('http://dpoi2012api.appspot.com/api/1.0/', {
                method: 'post',
                body: formData
            }).then((response) => {
                if (response.status !== 200) {
                    // Not success
                    resolve(response.text());
                } else {
                    // Success
                    resolve(response.text());
                }
            }).catch(err => {
                // Service Error
                reject(err);
            });
        });
    }
}

export { HTTPService };

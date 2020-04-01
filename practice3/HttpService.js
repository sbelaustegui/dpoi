/**
 * HTTP Web Service
 * This is a service class that uses fetch and promises.
 *
 * @class HTTPService
 */
class HttpService {

    serviceURL;

    constructor(serviceURL) {
      this.serviceURL = serviceURL;
    }

    /**
     * Get Fetch using HTTP Bin
     *
     * @example
     var service = new HttpService();
     service.Get().then((success => {
        console.log(success);
      }))
     * @memberof HttpService
     * @returns {promise} returns a Promise
     */
    getRequest(url) {
        return new Promise((resolve, reject) => {
            // We fetch the API endpoint
            fetch(this.serviceURL + url).then((response) => {
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
     var service = new HttpService();
     service.Post({
          name: 'John Doe',
          email: 'test@test.com'
        }).then(success => {
          console.log(success);
        })
     * @param {Object} object This is the form data.
     * @memberof HttpService
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
            fetch(this.serviceURL, {
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

export { HttpService };

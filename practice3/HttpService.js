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
     * @param url url to post
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
     * Post Fetch using HTTP Bin
     * @example
     var service = new HttpService();
     service.Post({
          name: 'John Doe',
          email: 'test@test.com'
        }).then(success => {
          console.log(success);
        })
     * @param url url to post
     * @param {formData} formData This is the form data.
     * @memberof HttpService
     * @returns {Promise} return a promise
     */
    postRequest(url, formData) {
        return new Promise((resolve, reject) => {
            // We create a new object
            let object = {};

            // we add all form values to the new object
            for(let pair of formData.entries()) {
                object[pair[0]] = pair[1];
            }

            // We fetch Post the API
            fetch(this.serviceURL + url, {
                method: 'post',
                body: JSON.stringify(object)
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

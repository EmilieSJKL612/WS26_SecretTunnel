# Secret Tunnel

Your journey has brought you to the base of a rocky mountain. You must **authenticate**
yourself to the guardians of the secret tunnel before you are **authorized** to pass!

A [live demo of the finished project](https://fsa-secret-tunnel.netlify.app/) is available as reference.

## Instructions

Before you start, read the documentation of [this practice API](https://fsa-jwt-practice.herokuapp.com).

### Register the user

1. In `AuthContext`, write and provide a `signup` function which takes in a username to send to the
   `POST /signup` endpoint on the API. If the request is successful, update `token`
   in state to the token that the API sends back, and set the location to `"TABLET"`.
2. Update `<Entrance>` to call `signup` with the user's name when the form is
   submitted.

### Authenticate the user

3. In `AuthContext`, write and provide an `authenticate` function. If there is
   no token in state, it should throw an error. Otherwise, it will attempt to
   `GET /authenticate` on the API. Make sure to attach the token in the request headers!
   If the request fails, throw an error. If the request succeeds, set the location to `"TUNNEL"`.
4. Update `<Tablet>` to call `authenticate` when the form is submitted.

## Extensions

If you finish early, try working on the following extensions:

- Use [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to store the token. Then, add a `useEffect` in `AuthContext` to try loading the token from session storage when the app first loads. This lets users skip typing in their credentials even if they refresh the page.
- Give the user feedback if there are any errors with the requests. Currently, the app
  just freezes if something goes wrong. Add some conditional text to tell the user what
  happened e.g. the token was malformed, or they mistyped their username.

## Submission

Please submit the link to your public GitHub repository.


## LN:
recap/refresh and differentiate different cases--

1. `JSON.stringify()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

https://www.w3schools.com/js/js_json_stringify.asp


The **`JSON.stringify()`** static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

a. When sending data ==to== a web server, the data has to be a *==string*==.
b. You can convert *==any* JavaScript datatype== into a string with `JSON.stringify()`.






2. fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
Note on HTTP error: (Em: probably covered in class but I don't remember, jogging down notes here for easy access)
The `fetch()` function will reject the promise on some errors, but ***not*** if the server responds with an error status like [`404`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404): so we also check the response status and throw if it is not OK.

Otherwise, we fetch the response body content as [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) by calling the [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json "json()") method of `Response`, and log one of its values. Note that like `fetch()` itself, `json()` is asynchronous, as are all the other methods to access the response body content.







3. console.error() vs. throw new error
https://stackoverflow.com/questions/25377115/what-is-the-difference-between-throw-error-and-console-error

Some of the Differences are:

**throw Error("msg"):**

1. Stops js execution.
2. Mostly used for code handling purpose.
3. Can alter main flow of execution.
4. This syntax is mostly same for all browser as this is specified and validated by **W3C**.

**console.error("msg"):**

1. It just shows output in Red color at Browser console
2. It is mostly used to print values for debugging purpose.
3. Cannot harm main flow of execution.
4. This Syntax sometimes vary according to vendor browser and not standardized by **W3C**.




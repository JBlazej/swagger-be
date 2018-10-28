import app from './server'

/**
 * Start Express server.
 */
const index = app.listen(app.get("port"), () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    )
    console.log("  Press CMD-C to stop\n");
  })
  
  export default index
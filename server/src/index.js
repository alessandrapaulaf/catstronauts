const { ApolloServer: Apollo } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const TrackAPI = require("./datasources/track-api");

async function startApolloServer() {
    const server = new Apollo({ 
      typeDefs,
      resolvers
    });
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        return {
          dataSources: {
            trackAPI: new TrackAPI(),
          }
        }
      }
    });

    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
  `);
}

startApolloServer();
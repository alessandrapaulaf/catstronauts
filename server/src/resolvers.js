const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome(); 
    },
    track: (_, { id }, { dataSources }, info) => {
      return dataSources.trackAPI.getTrack(id);
    }
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }, info) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
  
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch(err) {
        const { status, body } = err.extensions.response;
        return {
          code: status,
          success: false,
          message: body,
          track: null
        }
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }, info) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }, info) => {
      return dataSources.trackAPI.getTrackModules(id)
    }
  },
};

module.exports = resolvers;